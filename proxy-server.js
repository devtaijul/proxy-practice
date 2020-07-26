const puppeteer = require('puppeteer');
const proxy = process.env.PROXY;
 
(async () => {
  const browser = await puppeteer.launch({
      headless:false,
      args:[`--proxy-server=${proxy}`]
    });
  const page = await browser.newPage();
  await page.goto(`https://www.pandora.com/`, {timeout:60000});
  await page.screenshot({path: 'pandora.png'});
 
  await browser.close();
})();
