import puppeteer from "puppeteer";
import { solveCaptcha } from "nocaptchaai-puppeteer";

const urlList = [
  "https://accounts.hcaptcha.com/demo",
  "https://www.hcaptcha.com/pro",
];

//**** get apikey here -> http://nocaptchaai.com *****
// ONLY PASTE APIKEY inside " ". that's all
const API_KEY = "";
const UID = "NO-NEED";

const main = async () => {
  for (let i = 0; i < urlList.length; i++) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(urlList[i]);
    await page.waitForNetworkIdle();

    await solveCaptcha(page, API_KEY, UID, "pro");
    await browser.close();
  }
};

main();
