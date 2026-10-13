import { validateCatalog, readFilters, writeFilters, selectItems, rangeError, dateKeys, sorts } from './work-directory-model.mjs';

const form = document.querySelector('#filters');
const results = document.querySelector('[data-results]');
const params = new URLSearchParams(location.search);
let storedLanguage;
try { storedLanguage = localStorage.getItem('uchurch-public-language'); } catch { /* Storage is optional. */ }
let language = (params.get('lang') || storedLanguage) === 'en' ? 'en' : 'ru';
const text = (ru, en) => language === 'ru' ? ru : en;
const node = (tag, value, className) => {
  const element = document.createElement(tag);
  if (value !== undefined) element.textContent = value;
  if (className) element.className = className;
  return element;
};
let data, filters;
function syncForm() {
  for (const key of ['kind','number','query','sort','pageSize', ...dateKeys]) form.elements[key].value = filters[key];
  form.querySelectorAll('[name=part]').forEach(input => { input.checked = filters.parts.includes(input.value); });
}
function translate() {
  document.documentElement.lang = language;
  document.title = text('uChurch — справочник долгов и патчей', 'uChurch — debts and patches');
  document.querySelectorAll('[data-ru]').forEach(element => { element.textContent = element.dataset[language]; });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelector('[data-summary]').textContent = text(
    'Сначала — открытые долги. Исторические патчи пока находятся в истории версий. Выбранные части проекта учитываются вместе; неизвестные даты обозначены прочерком.',
    'Open debts first. Historical patches remain in version history for now. Selected project parts are combined; unknown dates are shown as a dash.');
  for (const input of form.querySelectorAll('[name=part]')) input.nextElementSibling.textContent = data.parts[input.value][language];
  const sortLabels = language === 'ru'
    ? ['Номер: сначала новые','Номер: сначала старые','Создание: сначала новые','Создание: сначала старые','Реализация: сначала новые','Реализация: сначала старые']
    : ['Number: newest first','Number: oldest first','Created: newest first','Created: oldest first','Implemented: newest first','Implemented: oldest first'];
  form.elements.sort.replaceChildren(...sorts.map((value, index) => { const option = node('option', sortLabels[index]); option.value = value; return option; }));
  syncForm();
}
function render() {
  const error = document.querySelector('#filter-error');
  error.hidden = !rangeError(filters);
  error.textContent = text('Дата «С» не может быть позже даты «По».', 'The From date cannot be later than To.');
  const selected = selectItems(data.items, filters);
  const pages = Math.max(1, Math.ceil(selected.length / filters.pageSize));
  filters.page = Math.min(filters.page, pages);
  const shown = selected.slice((filters.page - 1) * filters.pageSize, filters.page * filters.pageSize);
  results.replaceChildren();
  for (const item of shown) {
    const row = node('article', undefined, 'work-item');
    row.dataset.number = item.number;
    const identity = node('div', undefined, 'item-identity');
    identity.append(node('span', '#' + item.number, 'item-number'), node('span', item.code, 'item-code'), node('span', item.kind === 'debt' ? text('Долг','Debt') : text('Патч','Patch'), 'kind kind-' + item.kind));
    const content = node('div', undefined, 'item-content');
    content.append(node('h2', item[language].title), node('p', item[language].description));
    const tags = node('div', undefined, 'item-tags');
    tags.append(...item.parts.map(part => node('span', data.parts[part][language])));
    const source = node('a', text('Источник и критерии','Source and criteria'), 'item-source');
    source.href = item.source;
    content.append(tags, source);
    row.append(identity, content);
    for (const key of ['createdOn','implementedOn']) {
      const cell = node('div');
      cell.append(node('span', key === 'createdOn' ? text('Создано','Created') : text('Реализовано','Implemented'), 'date-label'));
      const date = item[key] ? node('time', item[key]) : node('span', '—', 'unknown-date');
      if (item[key]) date.dateTime = item[key];
      else date.title = item.kind === 'debt' && key === 'implementedOn' ? text('Ещё не реализовано','Not implemented yet') : text('Нет подтверждённой даты','No verified date');
      cell.append(date); row.append(cell);
    }
    results.append(row);
  }
  if (!shown.length) results.append(node('p', text('Нет записей по выбранным условиям.', 'No items match these filters.'), 'empty'));
  document.querySelector('[data-count]').textContent = text(`Найдено: ${selected.length} из ${data.items.length}`, `Found: ${selected.length} of ${data.items.length}`);
  document.querySelector('[data-page]').textContent = `${filters.page} / ${pages}`;
  document.querySelector('[data-prev]').disabled = filters.page === 1;
  document.querySelector('[data-next]').disabled = filters.page === pages;
  history.replaceState(null, '', `${location.pathname}?${writeFilters(filters, language)}${location.hash}`);
}
function updateFilters() {
  const search = new URLSearchParams();
  for (const key of ['kind','number','sort', ...dateKeys]) search.set(key, form.elements[key].value);
  search.set('q', form.elements.query.value);
  search.set('size', form.elements.pageSize.value);
  form.querySelectorAll('[name=part]:checked').forEach(input => search.append('part', input.value));
  filters = readFilters(search, data.parts);
  render();
}
try {
  const response = await fetch('assets/work-items.json', { cache:'no-store' });
  if (!response.ok) throw Error('Directory unavailable');
  data = validateCatalog(await response.json());
  filters = readFilters(params, data.parts);
  const parts = document.querySelector('[data-parts]');
  for (const [key, labels] of Object.entries(data.parts)) {
    const label = node('label');
    const input = node('input'); input.type = 'checkbox'; input.name = 'part'; input.value = key;
    label.append(input, node('span', labels[language])); parts.append(label);
  }
  translate(); render();
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', updateFilters);
  form.addEventListener('change', updateFilters);
  form.elements.pageSize.addEventListener('change', updateFilters);
  form.addEventListener('reset', event => { event.preventDefault(); filters = readFilters(new URLSearchParams(), data.parts); syncForm(); render(); });
  document.querySelector('[data-prev]').addEventListener('click', () => { filters.page--; render(); });
  document.querySelector('[data-next]').addEventListener('click', () => { filters.page++; render(); });
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    language = button.dataset.language;
    try { localStorage.setItem('uchurch-public-language', language); } catch { /* Filters remain usable without storage. */ }
    translate(); render();
  }));
} catch {
  document.querySelector('[data-count]').textContent = text('Не удалось загрузить справочник.', 'Could not load directory.');
  results.append(node('p', text('Обновите страницу или откройте текстовый список долгов по ссылке ниже.', 'Reload or open the text debt list below.'), 'error'));
  const link = node('a', text('Текстовый список долгов','Text debt list')); link.href = 'docs/development-debt.ru.md'; results.append(link);
}
