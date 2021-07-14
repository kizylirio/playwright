module.exports = {
    preset: 'jest-playwright-preset',
    testEnvironmentOptions: {
      'jest-playwright': {
        env: {
          username: "my@email.com"
        },
        launchOptions:{
          //args: ["--start-maximized"],
          headless: false,
          viewport: null
        },
        launchType: "LAUNCH",
        browsers: ["chromium"]
      },
    },
  } 