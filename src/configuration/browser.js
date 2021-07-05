import { chromium } from 'playwright';

export const startBrowser = async(browser, headless, options = {}) => {
    switch(browser){
        case 'chrome':
            const browser = await chromium.launch({
                headless,
                args: ['--start-maximized']}
              );

            if(!options.viewport){
                options['viewport'] = null
            }

            return await browser.newContext(options)

        default:
            return;
    }
}