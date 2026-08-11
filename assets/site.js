(() => {
  const catalog = window.UCHURCH_CATALOG || [];
  const state = { language: localStorage.getItem('uchurch-public-language') || 'ru', filter: 'all', query: '' };
  const copy = {
    ru: { search: 'Найти версию или тему', all: 'Все этапы', foundation: 'Основа', card: 'Карточка и Админка', quality: 'Качество', widgets: 'Виджеты', registry: 'Реестр', product: 'Продукт и данные', results: 'этапов показано', empty: 'Ничего не найдено. Попробуйте другое слово или этап.' },
    en: { search: 'Find a version or topic', all: 'All stages', foundation: 'Foundation', card: 'Card and Admin', quality: 'Quality', widgets: 'Widgets', registry: 'Registry', product: 'Product and data', results: 'stages shown', empty: 'Nothing found. Try another word or stage.' }
  };
  const label = (key) => copy[state.language][key];
  const renderCatalog = () => {
    const q = state.query.trim().toLocaleLowerCase();
    const rows = catalog.filter((item) => (state.filter === 'all' || item.stage === state.filter) && (!q || `${item.version} ${item.ru} ${item.en}`.toLocaleLowerCase().includes(q)));
    document.querySelector('[data-catalog-count]').textContent = `${rows.length} ${label('results')}`;
    document.querySelector('[data-catalog]').innerHTML = rows.length ? rows.map((item) => `<article class="release-row"><div class="release-version">${item.version}</div><p>${item[state.language]}</p><span class="release-stage">${label(item.stage)}</span></article>`).join('') : `<p class="empty-state">${label('empty')}</p>`;
  };
  const renderLanguage = () => {
    document.documentElement.lang = state.language;
    document.querySelectorAll('[data-copy]').forEach((node) => { node.textContent = node.dataset[`copy${state.language === 'ru' ? 'Ru' : 'En'}`] || node.textContent; });
    document.querySelectorAll('[data-filter]').forEach((button) => { button.textContent = label(button.dataset.filter); button.classList.toggle('is-active', button.dataset.filter === state.filter); });
    document.querySelector('[data-search]').placeholder = label('search');
    document.querySelector('[data-language="ru"]').classList.toggle('is-active', state.language === 'ru');
    document.querySelector('[data-language="en"]').classList.toggle('is-active', state.language === 'en');
    renderCatalog();
  };
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => { state.language = button.dataset.language; localStorage.setItem('uchurch-public-language', state.language); renderLanguage(); }));
    document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { state.filter = button.dataset.filter; renderLanguage(); }));
    document.querySelector('[data-search]').addEventListener('input', (event) => { state.query = event.target.value; renderCatalog(); });
    renderLanguage();
  });
})();
