const { test } = require('@playwright/test')

test.describe('Search on Google website', () => {
      test.use({args: ['--start-maximized']})

      test('Should playwright page found', async ({ page }) => {

            await page.goto('https://www.google.com/');
            await page.fill('[aria-label="Pesquisar"]', 'Playwright');
            await Promise.all([
                  page.waitForNavigation(),
                  page.press('[aria-label="Pesquisar"]', 'Enter')
            ]);
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