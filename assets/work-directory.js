import { validateCatalog, readFilters, writeFilters, selectItems, rangeError, dateKeys, sorts } from './work-directory-model.mjs?v=v17.11.115';

const form = document.querySelector('#filters');
const results = document.querySelector('[data-results]');
const advanced = document.querySelector('#advanced-filters');
const dialog = document.querySelector('#item-detail');
const params = new URLSearchParams(location.search);
let storedLanguage;
try { storedLanguage = localStorage.getItem('uchurch-public-language'); } catch { /* Optional preference only. */ }
let language = (params.get('lang') || storedLanguage) === 'en' ? 'en' : 'ru';
const text = (ru, en) => language === 'ru' ? ru : en;
const node = (tag, value, className) => {
  const element = document.createElement(tag);
  if (value !== undefined) element.textContent = value;
  if (className) element.className = className;
  return element;
};
const icon = name => {
  const image = node('img', undefined, 'icon');
  image.src = 'assets/icons/' + name + '.svg'; image.alt = '';
  return image;
};
let data, filters, selectedNumber = null, lastTrigger, invalidNumber = false;
function tag(part) {
  const element = node('span', data.parts[part][language], 'part-tag');
  element.dataset.part = part;
  return element;
}
function kindLabel(item) { return item.kind === 'debt' ? text('Долг', 'Debt') : text('Патч', 'Patch'); }
function dateElement(value) {
  if (!value) { const empty = node('span', '—'); empty.title = text('Нет подтверждённой даты', 'No verified date'); return empty; }
  const date = node('time', value); date.dateTime = value; return date;
}
function syncForm() {
  for (const key of ['kind','number','query','sort','pageSize', ...dateKeys]) form.elements[key].value = filters[key];
  form.querySelectorAll('[name=part]').forEach(input => { input.checked = filters.parts.includes(input.value); });
}
function translate() {
  document.documentElement.lang = language;
  document.title = text('uChurch — справочник долгов и патчей', 'uChurch — debts and patches');
  document.querySelector('nav').setAttribute('aria-label', text('Навигация', 'Navigation'));
  document.querySelector('.status-switch').setAttribute('aria-label', text('Тип записи', 'Item type'));
  document.querySelector('#directory-results').setAttribute('aria-label', text('Записи справочника', 'Directory items'));
  document.querySelectorAll('[data-ru]').forEach(element => { element.textContent = element.dataset[language]; });
  document.querySelectorAll('[data-label-ru]').forEach(element => {
    const value = element.dataset[language === 'ru' ? 'labelRu' : 'labelEn'];
    element.title = value; element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  const reviewed = new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : 'en-GB', {year:'numeric', month:'long', day:'numeric', timeZone:'UTC'}).format(new Date(data.reviewedOn));
  document.querySelector('[data-summary]').textContent = text('Сверено ', 'Reviewed ') + reviewed;
  form.elements.query.placeholder = text('Поиск по номеру, коду или названию…', 'Search number, code or title…');
  for (const input of form.querySelectorAll('[name=part]')) input.nextElementSibling.textContent = data.parts[input.value][language];
  const labels = language === 'ru'
    ? ['Номер: сначала новые','Номер: сначала старые','Создание: сначала новые','Создание: сначала старые','Реализация: сначала новые','Реализация: сначала старые']
    : ['Number: newest first','Number: oldest first','Created: newest first','Created: oldest first','Implemented: newest first','Implemented: oldest first'];
  form.elements.sort.replaceChildren(...sorts.map((value,index) => { const option = node('option',labels[index]); option.value = value; return option; }));
  syncForm();
}
function closeFilters() { advanced.open = false; advanced.querySelector('summary').focus(); }
function closeDetail() {
  if (typeof dialog.close === 'function') dialog.close();
  else { dialog.removeAttribute('open'); finishDetail(); }
}
function finishDetail() {
  document.querySelectorAll('.is-selected').forEach(row => row.classList.remove('is-selected'));
  if (lastTrigger?.isConnected) lastTrigger.focus();
  selectedNumber = null;
}
dialog.addEventListener('close', finishDetail);
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button:not(:disabled), a[href]')].filter(element => element.getClientRects().length);
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
dialog.addEventListener('click', event => { if (event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDetail(); } });
document.querySelector('[data-close-detail]').addEventListener('click', closeDetail);
function openDetail(item, trigger) {
  selectedNumber = item.number; lastTrigger = trigger;
  document.querySelectorAll('.work-item').forEach(row => row.classList.toggle('is-selected', Number(row.dataset.number) === item.number));
  document.querySelector('[data-detail-number]').textContent = '#' + item.number;
  const body = document.querySelector('[data-detail-body]');
  const status = node('span',kindLabel(item),'kind kind-' + item.kind);
  const title = node('h2',item[language].title); title.id = 'detail-title';
  const tags = node('div',undefined,'item-tags'); tags.append(...item.parts.map(tag));
  const dates = node('dl',undefined,'detail-dates');
  for (const [label,value] of [[text('Создано','Created'),item.createdOn],[text('Реализовано','Implemented'),item.implementedOn]]) {
    const field=node('div'); const dd=node('dd'); dd.append(dateElement(value)); field.append(node('dt',label),dd); dates.append(field);
  }
  const source=node('a',text('Источник и критерии','Source and criteria'),'source-link');
  source.href=item.source; source.target='_blank'; source.rel='noopener noreferrer'; source.append(icon('external-link'));
  body.replaceChildren(status,node('p',item.code + (item.version ? ' · ' + item.version : ''),'item-code'),title,tags,node('p',item[language].description,'detail-description'),dates,source);
  if (!dialog.open) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else { dialog.setAttribute('open',''); dialog.setAttribute('aria-modal','false'); }
  }
  document.querySelector('[data-close-detail]').focus();
}
function renderApplied() {
  const active = document.querySelector('[data-applied]');
  active.replaceChildren();
  const entries = [
    ...filters.parts.map(part => ({ label:data.parts[part][language], clear:()=>{filters.parts=filters.parts.filter(value=>value!==part);} })),
    ...(filters.number ? [{ label:'#'+filters.number, clear:()=>{filters.number='';} }] : []),
    ...dateKeys.filter(key=>filters[key]).map(key=>({
      label:({createdFrom:text('Создано с','Created from'),createdTo:text('Создано по','Created to'),implementedFrom:text('Реализовано с','Implemented from'),implementedTo:text('Реализовано по','Implemented to')})[key]+' '+filters[key],
      clear:()=>{filters[key]='';}
    }))
  ];
  for (const entry of entries) {
    const button=node('button'); button.type='button';
    button.append(node('span',entry.label),icon('x')); button.setAttribute('aria-label',text('Убрать фильтр: ','Remove filter: ')+entry.label);
    button.addEventListener('click',()=>{entry.clear();filters.page=1;syncForm();render();advanced.querySelector('summary').focus();});
    active.append(button);
  }
  const count=document.querySelector('[data-filter-count]');
  count.hidden=!entries.length; count.textContent=String(entries.length);
}
function render() {
  const invalid = rangeError(filters) || invalidNumber;
  const error=document.querySelector('#filter-error');
  error.hidden=!invalid;
  error.textContent=invalidNumber ? text('Номер должен быть целым положительным числом.','Number must be a positive integer.') : text('Дата «С» не может быть позже даты «По».','The From date cannot be later than To.');
  for (const button of form.querySelectorAll('[data-kind]')) {
    button.setAttribute('aria-pressed',String(button.dataset.kind===filters.kind));
    button.querySelector('[data-total]').textContent=String(data.items.filter(item=>!button.dataset.kind || item.kind===button.dataset.kind).length);
  }
  const selected=invalid ? [] : selectItems(data.items,filters);
  const pages=Math.max(1,Math.ceil(selected.length/filters.pageSize));
  filters.page=Math.min(filters.page,pages);
  const shown=selected.slice((filters.page-1)*filters.pageSize,filters.page*filters.pageSize);
  results.replaceChildren();
  for (const item of shown) {
    const row=node('article',undefined,'work-item'); row.dataset.number=item.number;
    row.classList.toggle('is-selected',selectedNumber===item.number);
    const identity=node('div',undefined,'item-identity');
    identity.append(node('span','#'+item.number,'item-number'),node('span',item.code,'item-code'),node('span',kindLabel(item),'kind kind-'+item.kind));
    const content=node('div',undefined,'item-content');
    content.append(node('h2',item[language].title),node('p',item[language].description));
    const tags=node('div',undefined,'item-tags'); tags.append(...item.parts.map(tag));
    row.append(identity,content,tags);
    for(const key of ['createdOn','implementedOn']) { const cell=node('div',undefined,'date-column'); cell.append(dateElement(item[key])); row.append(cell); }
    const button=node('button',undefined,'icon-button detail-open'); button.type='button'; button.dataset.detail=item.number;
    const label=text('Открыть запись ','Open item ')+'#'+item.number+': '+item[language].title;
    button.title=label; button.setAttribute('aria-label',label); button.append(icon('chevron-right'));
    button.addEventListener('click',()=>openDetail(item,button));
    row.append(button);
    row.addEventListener('click',event=>{ if(!event.target.closest('button,a')) openDetail(item,button); });
    results.append(row);
  }
  if(!shown.length) results.append(node('p',text('Нет записей по выбранным условиям.','No items match these filters.'),'empty'));
  document.querySelector('[data-count]').textContent=text('Найдено: ','Found: ')+selected.length+text(' из ',' of ')+data.items.length;
  document.querySelector('[data-page]').textContent=filters.page+' / '+pages;
  document.querySelector('[data-prev]').disabled=filters.page===1;
  document.querySelector('[data-next]').disabled=filters.page===pages;
  renderApplied();
  history.replaceState(null,'',location.pathname+'?'+writeFilters(filters,language)+location.hash);
}
function updateFilters() {
  const search=new URLSearchParams();
  for(const key of ['kind','number','sort',...dateKeys]) search.set(key,form.elements[key].value);
  search.set('q',form.elements.query.value); search.set('size',form.elements.pageSize.value);
  form.querySelectorAll('[name=part]:checked').forEach(input=>search.append('part',input.value));
  invalidNumber=!form.elements.number.validity.valid;
  filters=readFilters(search,data.parts); render();
}
try {
  const response=await fetch('assets/work-items.json?v=v17.11.115',{cache:'no-store'});
  if(!response.ok) throw Error('Directory unavailable');
  data=validateCatalog(await response.json());
  filters=readFilters(params,data.parts);
  const parts=document.querySelector('[data-parts]');
  for(const [key,labels] of Object.entries(data.parts)) {
    const label=node('label'); const input=node('input'); input.type='checkbox'; input.name='part'; input.value=key;
    label.append(input,tag(key)); parts.append(label);
  }
  translate(); render();
  form.addEventListener('submit',event=>event.preventDefault());
  form.addEventListener('input',updateFilters); form.addEventListener('change',updateFilters);
  form.elements.pageSize.addEventListener('change',updateFilters);
  form.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{form.elements.kind.value=button.dataset.kind;updateFilters();}));
  form.addEventListener('reset',event=>{ event.preventDefault();invalidNumber=false;filters=readFilters(new URLSearchParams(),data.parts);syncForm();render(); });
  document.querySelector('[data-close-filters]').addEventListener('click',closeFilters);
  document.addEventListener('keydown',event=>{ if(event.key==='Escape' && advanced.open && !dialog.open) {event.preventDefault();closeFilters();} else if(event.key==='Escape' && dialog.open && typeof dialog.close!=='function') closeDetail(); });
  document.addEventListener('click',event=>{ if(advanced.open && !advanced.contains(event.target) && !event.target.closest('[data-applied]')) advanced.open=false; });
  const nextPage=delta=>{filters.page+=delta;render();document.querySelector('#directory-results').scrollIntoView({block:'start'});};
  document.querySelector('[data-prev]').addEventListener('click',()=>nextPage(-1));
  document.querySelector('[data-next]').addEventListener('click',()=>nextPage(1));
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{
    language=button.dataset.language;try{localStorage.setItem('uchurch-public-language',language);}catch{/* Optional preference only. */}
    translate();render();
  }));
} catch {
  document.querySelector('[data-count]').textContent=text('Не удалось загрузить справочник.','Could not load directory.');
  results.append(node('p',text('Обновите страницу или откройте текстовый список долгов.','Reload or open the text debt list.'),'error'));
  const link=node('a',text('Текстовый список долгов','Text debt list'));link.href='docs/development-debt.ru.md';results.append(link);
}
