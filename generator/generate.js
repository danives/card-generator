const puppeteer = require("puppeteer");
const csv = require('csvtojson');
const fs = require('fs');
const querystring = require('querystring');

async function processOutput(folder, jsonData) {
  let browser = await puppeteer.launch().catch(e => { console.log(e) });
  let outputPath = `${__dirname}/../output/${folder}/`;
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
    fs.mkdirSync(outputPath + '/back/');
    fs.mkdirSync(outputPath + '/front/');
  }

  for (const [index, row] of jsonData.entries()) {
    let queryString = querystring.stringify(row);
    let page = await browser.newPage().catch(e => { console.log(e) });

    // Generate the back
    await page.goto("http://localhost:3000/" + folder + "/back?" + queryString);
    await page.setViewport({ width: 500, height: 500 });
    await page.screenshot({ path: outputPath + "/back/" + index + ".png" });

    // Generate the front
    await page.goto("http://localhost:3000/" + folder + "/front?" + queryString);
    await page.setViewport({ width: 500, height: 500 });
    await page.screenshot({ path: outputPath + "/front/" + index + ".png" });
  };
  browser.close();
}

fs.readdir(`${__dirname}/spreadsheets/`, (err, files) => {
  files.forEach(file => {
    csv()
      .fromFile(`${__dirname}/spreadsheets/${file}`)
      .then((list) => {
        let folder = file.split('.').slice(0, -1).join('.');
        processOutput(folder, list);
      });
  });
});