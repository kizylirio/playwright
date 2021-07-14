describe('Search on Google website', () => {
      test('Should playwright page found', async () => {
            await page.goto('https://www.google.com/');
            await page.fill('[aria-label="Pesquisar"]', 'Playwright');
            await Promise.all([
                  page.waitForNavigation(),
                  page.press('[aria-label="Pesquisar"]', 'Enter')
            ]);
            await page.close();
      })
}) 