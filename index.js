const puppeteer = require("puppeteer");
const debug = require("debug")("app:puppeteer");

(async () => {
    debug('opening a browser');
    const browser = await puppeteer.launch();
    debug("creating new page in the browser");
    const page = await browser.newPage();
    debug('going to the tergeted link');
    await page.goto("http://react-redux.realworld.io/#/?_k=vjadnr");
    debug("waiting for th selector");
    await page.waitForSelector('.preview-link h1');
    debug("collecting page title");
    const title = await page.title();
    debug("collecting the data ")
    const preview = await page.evaluate(() => {
        const output = document.querySelector('.preview-link h1').innerHTML;
        return output
    });
    debug({title, preview})
    debug("closing the browser");
    await browser.close();
})()