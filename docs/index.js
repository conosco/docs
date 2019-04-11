const cheerio = require("cheerio");
const jsonfile = require("jsonfile");
const baseUrl = "https://www.valor.com.br/busca/fundos%2Bde%2Bpens%25C3%25A3o";
const puppeteer = require("puppeteer");

async function fetchInnerHtml(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    let innerHTML = await page.evaluate(() => document.body.innerHTML);
    return await innerHTML;
  } catch (error) {
    throw error;
  }
}

async function fetchResultSetItems(innerHTML) {
  try {
    let $ = await cheerio.load(innerHTML);
    let items = [];
    await $(".search-result-itens").each((i, obj) => {
      let h2 = $(obj).find("h2");
      let title = $(h2).text();
      var href = $(h2)
        .children()
        .attr("href");
      items.push([{ title: title, href: href }]);
    });
    return items;
  } catch (error) {
    throw error;
  }
}

async function saveDataInJson(data) {
  try {
    var date = new Date();
    await jsonfile.writeFile(`./${date.getTime()}_output.json`, data);
  } catch (error) {
    throw error;
  }
}

async function init() {
  try {
    let html = await fetchInnerHtml(baseUrl);
    let items = await fetchResultSetItems(html);
    await saveDataInJson(items);
    await console.log("FIM DA BESTA ENJAULADA");
    return process.exit(1);
  } catch (error) {
    console.log(error);
  }
}

init();
