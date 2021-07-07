import { describe, test } from '@playwright/test'
import { startBrowser } from '../configuration/browser.js';
import { takeScreenshot } from '../configuration/screenshot.js'

describe('Search on Google website', () => {
      test('Should playwright page found', () => {
            const page = await startBrowser('chrome', false).then( browser => browser.newPage())

            await page.goto('https://www.google.com/');
      
            await page.fill('[aria-label="Pesquisar"]', 'Playwright');
      
            await Promise.all([
                  page.waitForNavigation(),
                  page.press('[aria-label="Pesquisar"]', 'Enter')
            ]);
      
            await takeScreenshot(page, {fullPage: false})
      
            await page.close();
      })
})


// (async () => {

//       const page = await startBrowser('chrome', false).then( browser => browser.newPage())

//       await page.goto('https://www.google.com/');

//       await page.fill('[aria-label="Pesquisar"]', 'Playwright');

//       await Promise.all([
//             page.waitForNavigation(),
//             page.press('[aria-label="Pesquisar"]', 'Enter')
//       ]);

//       await takeScreenshot(page, {fullPage: false})

//       await page.close();
// })();