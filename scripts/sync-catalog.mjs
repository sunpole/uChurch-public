import fs from 'node:fs';
import vm from 'node:vm';
const scope = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/catalog.js', 'utf8'), scope);
const catalog = Array.from(scope.window.UCHURCH_CATALOG);
const readHistory = language => new Map(fs.readFileSync(`docs/patch-history.${language}.md`, 'utf8')
  .split(/\r?\n/).filter(line => /^\| v/.test(line)).map(line => {
    const [, version, description] = line.split('|');
    return [version.trim(), description.trim().replace(/`/g, '')];
  }));
const ru = readHistory('ru'), en = readHistory('en');
const number = value => Number(value.match(/v17\.11\.(\d+)/)?.[1]);
const covered = new Set();
for (const item of catalog) {
  const first = number(item.version);
  if (!Number.isFinite(first)) continue;
  const end = Number(item.version.match(/-v17\.11\.(\d+)/)?.[1] || first);
  for (let n = first; n <= end; n++) covered.add(n);
}
for (const [version, description] of ru) {
  if (covered.has(number(version))) continue;
  if (!en.has(version)) throw new Error(`Missing English history: ${version}`);
  catalog.push({ stage: 'product', version, ru: description, en: en.get(version) });
}
catalog.sort((a, b) => {
  const parts = value => (value.match(/v(\d+(?:\.\d+)*)/)?.[1] || '0').split('.').map(Number);
  const x = parts(a.version), y = parts(b.version);
  for (let n = 0; n < Math.max(x.length, y.length); n++) if ((x[n] || 0) !== (y[n] || 0)) return (x[n] || 0) - (y[n] || 0);
  return 0;
});
fs.writeFileSync('assets/catalog.js', `window.UCHURCH_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`);
console.log(`Catalog synchronized: ${catalog.length} preserved/documented entries.`);
