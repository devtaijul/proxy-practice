/* const { JSDOM } = require('jsdom');

const dom = new JSDOM( `<!DOCTYPE html><html><h1><p>Hello</p></h1></html>` );

const {document} = dom.window;

console.log(document.querySelector('p').textContent) */

const debug = require("debug")("app:axios");
const axios = require("axios");
const { JSDOM } = require("jsdom");

const main = async () => {
    debug('collecting data');
  const res = await axios("http://bikroy.com");
  const data = await res.data;
 debug('creating dom for output')
  const dom = new JSDOM(data);
  const { document } = dom.window;
  //console.log(document.querySelector("h1").textContent);
  debug(document.querySelector("h1").textContent)
};

main();
