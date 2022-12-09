import puppeteer from "puppeteer";
import { solveCaptcha } from "nocaptchaai-puppeteer";

const urlList = [
  "https://accounts.hcaptcha.com/demo",
  "https://shimuldn.github.io/hcaptcha",
];

const API_KEY = "palash-848edb5a-86b1-2df7-44a8-8836ec0531e7"; // <-- your UID here
const UID = "palash"; // <-- your API key here

const main = async () => {
  for (let i = 0; i < urlList.length; i++) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(urlList[i]);
    await page.waitForNetworkIdle();

    await solveCaptcha(page, API_KEY, UID, "free");

    await page.screenshot({ path: `${URL}.jpeg`, type: "jpeg" });

    await browser.close();
  }
};

main();
