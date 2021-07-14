// const fsx = require('fs-extra')
// const path = require('path')

// const babelRcPath = path.resolve('babel.config.json')
// const babelRC = fsx.readJsonSync(babelRcPath)

// require("@babel/register")(babelRC);

module.exports = {
    testDir: 'lib/test',
    use: {
      // Browser options
      headless: false,
      slowMo: 50,
      //viewport: null,
      //args: ['--start-maximized'],
  
      // Context options
      ignoreHTTPSErrors: true,
  
      // Artifacts
      screenshot: 'only-on-failure',
      video: 'retry-with-video',
    },
  };