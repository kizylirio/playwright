import { test } from '@playwright/test'

test.describe('Search on Google website', function(){

      test('Should playwright page found', async function( {page}){

            await page.goto('https://www.google.com/');
            await page.fill('[aria-label="Pesquisar"]', 'Playwright');
            await Promise.all([
                  page.waitForNavigation(),
                  page.press('[aria-label="Pesquisar"]', 'Enter')
            ]);
            await page.close();
      })
})