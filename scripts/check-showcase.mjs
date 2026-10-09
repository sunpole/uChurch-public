import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.UCHURCH_PLAYWRIGHT_MODULE || 'playwright');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.md': 'text/plain' };
const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.UCHURCH_CHROME_PATH || undefined });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.locator('.release-row').first().waitFor();
  assert.ok(await page.locator('.release-row').count() >= 100);
  assert.equal(await page.evaluate(() => new Set(window.UCHURCH_CATALOG.map(item => item.version)).size), await page.locator('.release-row').count(), 'no duplicate version rows');
  async function assertNewestFirst() {
    const versions = await page.locator('.release-version').allTextContents();
    assert.deepEqual(versions, [...versions].sort((a, b) => b.localeCompare(a, 'en', { numeric: true })), 'newest version first, including numeric suffixes');
  }
  await assertNewestFirst();
  await page.locator('[data-filter=card]').click();
  await assertNewestFirst();
  await page.locator('[data-language=en]').click();
  await assertNewestFirst();
  await page.locator('[data-filter=all]').click();
  assert.ok(await page.locator('#debt').isVisible());
  const version = process.argv[2] || 'v17.11.108';
  assert.equal(await page.locator('.release-version').first().textContent(), version);
  await page.locator('[data-search]').fill(version);
  assert.match(await page.locator('[data-catalog]').textContent(), new RegExp(version.replaceAll('.', '\\.')));
  await page.locator('[data-language=en]').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await page.locator('[data-language=ru]').click();
  await page.locator('[data-search]').fill('');
  await assertNewestFirst();
  const links = await page.locator('a[href]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')).filter(h => !h.startsWith('#') && !/^https?:/.test(h)));
  for (const link of links) assert.equal((await page.request.get(`http://127.0.0.1:${server.address().port}/${link}`)).status(), 200, link);
  for (const [width, height] of [[1366,768],[1920,1080],[412,915],[321,568]]) {
    await page.setViewportSize({ width, height });
    await page.locator('#chronicle').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll('#chronicle img')].length === 2
      && [...document.querySelectorAll('#chronicle img')].every(img => img.complete && img.naturalWidth > 0));
    const figures = await page.locator('#chronicle figure').evaluateAll(nodes => nodes.map(node => {
      const { x, y, width, height } = node.getBoundingClientRect(); return { x, y, width, height };
    }));
    assert.ok(figures[0].x + figures[0].width <= figures[1].x
      || figures[0].y + figures[0].height <= figures[1].y, 'chronicle figures must not overlap');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}px overflow`);
  }
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.locator('#history').scrollIntoViewIfNeeded();
  const screenshot = process.argv[3];
  if (screenshot) await page.screenshot({ path: path.resolve(root, screenshot) });
  assert.deepEqual(errors, []);
  console.log(`Public showcase passed: ${version}, catalog, RU/EN, local links, four viewports, no JS errors.`);
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
