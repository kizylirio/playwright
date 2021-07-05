import path from 'path'
import fsx from 'fs-extra'

const DEFAULT_DIR = path.join('result', 'screenshots')
const DEFAULT_PATH = path.resolve(DEFAULT_DIR)

export const takeScreenshot = async(page, { fileName = "screenshot", fullPage = true } = {}) => {

    fsx.ensureDirSync(DEFAULT_PATH)
    const filePath = path.join(DEFAULT_DIR, `${fileName}.png`)

    return await page.screenshot({ path: filePath, fullPage });
}