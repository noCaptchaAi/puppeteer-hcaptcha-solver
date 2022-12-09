import puppeteer from "puppeteer";
import { solveCaptcha } from "nocaptchaai-puppeteer";

const urlList = [
  "https://accounts.hcaptcha.com/demo",
  "https://www.hcaptcha.com/pro",
];

//**** get apikey here -> http://nocaptchaai.com *****
const API_KEY = ""; // <-- your UID here
const UID = ""; // <-- your API key here

const main = async () => {
  for (let i = 0; i < urlList.length; i++) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(urlList[i]);
    await page.waitForNetworkIdle();

    await solveCaptcha(page, API_KEY, UID, "pro");
    await page.screenshot({ path: `${urlList[i]}.jpeg`, type: "jpeg" });
    await browser.close();
  }
};

main();
