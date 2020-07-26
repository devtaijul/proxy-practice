const debug = require("debug")("app:axios");
const axios = require("axios");
const cheerio = require("cheerio");

const main = async () => {
  const res = await axios("http://bikroy.com");
  const data = await res.data;
  const $ = cheerio.load(data);
  debug($("h1").text());

};

main()