export const sorts = ['number-desc', 'number-asc', 'created-desc', 'created-asc', 'implemented-desc', 'implemented-asc'];
export const dateKeys = ['createdFrom', 'createdTo', 'implementedFrom', 'implementedTo'];
export function isDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}
export function safeSource(value) {
  return typeof value === 'string' && /^docs\/[a-zA-Z0-9._-]+\.md$/.test(value);
}
export function validateCatalog(data) {
  if (data.schemaVersion !== 1 || !isDate(data.reviewedOn) || !Array.isArray(data.items) || !data.parts) throw Error('Invalid directory schema');
  const numbers = new Set();
  const codes = new Set();
  for (const item of data.items) {
    if (!Number.isSafeInteger(item.number) || item.number <= 0 || numbers.has(item.number)) throw Error('Invalid or duplicate number');
    if (!/^[A-Z0-9-]+$/.test(item.code) || codes.has(item.code)) throw Error('Invalid or duplicate code');
    if (!['debt', 'patch'].includes(item.kind)) throw Error('Invalid kind');
    if (!Array.isArray(item.parts) || !item.parts.length || new Set(item.parts).size !== item.parts.length || item.parts.some(part => !data.parts[part])) throw Error('Invalid parts');
    for (const key of ['createdOn', 'implementedOn']) if (item[key] !== null && !isDate(item[key])) throw Error('Invalid date');
    if (item.kind === 'debt' && item.implementedOn !== null) throw Error('Debt cannot have implementation date');
    if (item.createdOn && item.implementedOn && item.implementedOn < item.createdOn) throw Error('Reversed item dates');
    if (!safeSource(item.source)) throw Error('Unsafe source');
    for (const lang of ['ru', 'en']) for (const key of ['title', 'description']) if (typeof item[lang]?.[key] !== 'string' || !item[lang][key].trim()) throw Error('Missing translation');
    numbers.add(item.number); codes.add(item.code);
  }
  return data;
}
export function readFilters(params, parts) {
  const rawNumber = params.get('number') || '';
  return {
    kind: ['debt', 'patch'].includes(params.get('kind')) ? params.get('kind') : '',
    parts: [...new Set(params.getAll('part').filter(part => Object.hasOwn(parts, part)))],
    number: /^[1-9]\d*$/.test(rawNumber) && Number.isSafeInteger(Number(rawNumber)) ? rawNumber : '',
    query: (params.get('q') || '').slice(0, 300),
    ...Object.fromEntries(dateKeys.map(key => [key, isDate(params.get(key)) ? params.get(key) : ''])),
    sort: sorts.includes(params.get('sort')) ? params.get('sort') : 'number-desc',
    pageSize: [25, 50, 100].includes(Number(params.get('size'))) ? Number(params.get('size')) : 25,
    page: /^[1-9]\d*$/.test(params.get('page') || '') && Number.isSafeInteger(Number(params.get('page'))) ? Number(params.get('page')) : 1
  };
}
export function writeFilters(filters, language) {
  const params = new URLSearchParams();
  params.set('lang', language);
  for (const [key, value] of Object.entries({ kind: filters.kind, number: filters.number, q: filters.query, ...Object.fromEntries(dateKeys.map(key => [key, filters[key]])), sort: filters.sort, size: filters.pageSize, page: filters.page })) if (value !== '') params.set(key, value);
  filters.parts.forEach(part => params.append('part', part));
  return params;
}
export function rangeError(filters) {
  return ['created', 'implemented'].some(key => filters[key + 'From'] && filters[key + 'To'] && filters[key + 'From'] > filters[key + 'To']);
}
export function selectItems(items, filters) {
  if (rangeError(filters)) return [];
  const query = filters.query.trim().toLocaleLowerCase();
  const selected = items.filter(item => (!filters.kind || item.kind === filters.kind)
    && (!filters.number || item.number === Number(filters.number))
    && filters.parts.every(part => item.parts.includes(part))
    && (!query || `${item.code} ${item.version || ''} ${item.ru.title} ${item.ru.description} ${item.en.title} ${item.en.description}`.toLocaleLowerCase().includes(query))
    && ['created', 'implemented'].every(prefix => {
      const date = item[prefix + 'On'];
      const from = filters[prefix + 'From'], to = filters[prefix + 'To'];
      return (!from && !to) || (date !== null && (!from || date >= from) && (!to || date <= to));
    }));
  const [key, direction] = filters.sort.split('-');
  return selected.sort((a, b) => {
    if (key === 'number') return direction === 'asc' ? a.number - b.number : b.number - a.number;
    const left = a[key + 'On'], right = b[key + 'On'];
    if (left === null || right === null) return left === right ? b.number - a.number : left === null ? 1 : -1;
    return (direction === 'asc' ? left.localeCompare(right) : right.localeCompare(left)) || b.number - a.number;
  });
}
