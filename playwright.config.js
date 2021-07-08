module.exports = {
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