const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
    args: ["--start-maximized"],
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://rbc.ru");

  const closePage =
    "body > div.push-allow.js-push-allow > div.push-allow__block.js-push-allow-block.active > div.push-allow__controls > div:nth-child(2) > a";
  await page.waitForSelector(closePage);
  await page.click(closePage);

  const location =
    "body > div.topline__wrapper.js-topline-wrapper.topline__wrapper_min > div > div.topline__inner.l-row.js-topline > div.topline__right > div.topline__region-block > div > div > div > div.topline__region__detector.g-hidden.js-region-detector > a.topline__region__detector__button.js-region-detector-button";
  await page.waitForSelector(location);
  await page.click(location);
  //await browser.close();

  const clickPage =
    "body > div.topline__wrapper.js-topline-wrapper.topline__wrapper_min > div > div.topline__inner.l-row.js-topline > div.topline__right > div.topline__auth.js-topline-profile-container > a";
  await page.waitForSelector(clickPage);
  await page.click(clickPage);

  const clickEnter =
    "body > div.topline__wrapper.js-topline-wrapper.topline__wrapper_min > div > div.topline__inner.l-row.js-topline > div.topline__right > div.topline__auth.js-topline-profile-container.active > div > div > div > div:nth-child(1)";
  await page.waitForSelector(clickEnter);
  await page.click(clickEnter);
})();
