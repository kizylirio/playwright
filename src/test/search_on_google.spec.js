import { test } from '@playwright/test'

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