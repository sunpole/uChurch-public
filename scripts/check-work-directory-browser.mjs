import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = createRequire(import.meta.url)(process.env.UCHURCH_PLAYWRIGHT_MODULE || 'playwright');
const data = JSON.parse(fs.readFileSync(path.join(root, 'assets/work-items.json')));
const types = { '.html':'text/html', '.js':'text/javascript', '.mjs':'text/javascript', '.json':'application/json', '.css':'text/css', '.svg':'image/svg+xml', '.md':'text/plain' };
const server = http.createServer((req,res) => {
  const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
let browser;
try {
  browser = await chromium.launch({ executablePath:process.env.UCHURCH_CHROME_PATH || undefined });
  const page = await browser.newPage(); const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const url = `http://127.0.0.1:${server.address().port}/catalog.html`;
  await page.goto(url); await page.locator('.work-item').first().waitFor();
  assert.equal(await page.locator('.work-item').count(), Math.min(25, data.items.length));
  const input = name => page.locator(`[name=${name}]`);
  await input('number').fill('7'); assert.equal(await page.locator('.work-item').count(),1);
  await input('kind').selectOption(data.items.find(item=>item.number===7).kind); assert.equal(await page.locator('.work-item').count(),1);
  await page.locator('[name=part][value=catalog]').check();
  await input('createdFrom').fill('2026-10-13'); await input('createdTo').fill('2026-10-13');
  assert.equal(await page.locator('.work-item').count(),1);
  await page.reload(); await page.locator('.work-item').first().waitFor();
  assert.equal(await input('number').inputValue(),'7');
  await page.locator('[data-language=en]').click(); assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert.match(await page.locator('.work-item').textContent(),/Patch/);
  await input('createdTo').fill('2026-10-12'); assert.equal(await page.locator('#filter-error').isVisible(),true);
  assert.equal(await page.locator('.work-item').count(),0);
  await page.locator('[type=reset]').click(); assert.equal(await page.locator('.work-item').count(),Math.min(25,data.items.length));
  await input('kind').selectOption('patch');
  assert.equal(await page.locator('.work-item').count(),data.items.filter(item=>item.kind==='patch').length);
  await page.locator('[type=reset]').click();
  await input('query').fill('SR1'); assert.equal(await page.locator('.work-item').count(),2);
  await page.locator('[type=reset]').click();
  await page.locator('[name=part][value=table]').check(); await page.locator('[name=part][value=admin]').check();
  assert.equal(await page.locator('.work-item').count(),data.items.filter(item=>item.parts.includes('table')&&item.parts.includes('admin')).length);
  await page.locator('[type=reset]').click();
  await input('sort').selectOption('number-asc'); assert.equal(await page.locator('.work-item').first().getAttribute('data-number'),'1');
  await input('pageSize').selectOption('100'); assert.equal(new URL(page.url()).searchParams.get('size'),'100');
  for (const [width,height] of [[1024,680],[1280,720],[1366,768],[1920,1080],[2560,1440],[3840,2160],[412,915],[321,568]]) {
    await page.setViewportSize({width,height});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width}px overflow`);
    const controls = await page.locator('input,select,button').evaluateAll(nodes=>nodes.filter(n=>n.getBoundingClientRect().width).map(n=>{const r=n.getBoundingClientRect();return {x:r.x,right:r.right}}));
    assert.ok(controls.every(r=>r.x>=0&&r.right<=width),`${width}px controls clipped`);
  }
  await page.setViewportSize({width:1366,height:768}); await page.locator('[type=reset]').click(); await page.locator('[data-language=ru]').click();
  if (process.argv[2]) await page.screenshot({path:path.resolve(process.argv[2])});
  // Pagination is exercised with synthetic public catalog text, never CRM data.
  await page.route('**/assets/work-items.json', route => {
    const copy = structuredClone(data);
    for (let i=1000;i<1030;i++) copy.items.push({...copy.items[0],number:i,code:'QA-'+i,ru:{title:'<img src=x onerror=alert(1)>',description:'Synthetic directory text'},en:{title:'Synthetic',description:'Synthetic'}});
    return route.fulfill({json:copy});
  });
  await page.goto(url); await page.locator('.work-item').first().waitFor();
  assert.equal(await page.locator('.work-item').count(),25); assert.equal(await page.locator('[data-results] img').count(),0);
  await page.locator('[data-next]').click(); assert.equal(new URL(page.url()).searchParams.get('page'),'2');
  await page.locator('[data-prev]').click(); assert.equal(new URL(page.url()).searchParams.get('page'),'1');
  await input('pageSize').selectOption('100'); assert.equal(await page.locator('.work-item').count(),data.items.length+30);
  await page.unroute('**/assets/work-items.json');
  const blocked = await browser.newContext(); await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw Error('blocked')}}));
  const blockedPage=await blocked.newPage(); await blockedPage.goto(url+'?number=7&sort=invalid&createdFrom=invalid');
  await blockedPage.locator('.work-item').first().waitFor(); assert.equal(await blockedPage.locator('.work-item').count(),1);
  await blockedPage.locator('[data-language=en]').click(); await blocked.close();
  assert.deepEqual(errors,[]);
  console.log('Directory browser passed: combined filters, reset, URL reload, language, invalid range, 8 viewports, pagination, safe text, blocked storage.');
} finally { await browser?.close(); await new Promise(resolve=>server.close(resolve)); }
