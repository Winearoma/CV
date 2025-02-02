import puppeteer from 'puppeteer';


const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.goto('https://news.ycombinator.com', {
  waitUntil: 'networkidle2',
});
// Saves the PDF to hn.pdf.
await page.pdf({
  path: 'hn.pdf',
});

await browser.close();
