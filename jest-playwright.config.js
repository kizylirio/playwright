module.exports = {
    env: {
        username: "my@email.com"
    },
    launchOptions:{
        args: ["--start-maximized"],
        headless: false,
    },
    contextOptions: {
        ignoreHTTPSErrors: true,
        viewport: null
    },
    launchType: "LAUNCH",
    browsers: ["chromium"]
}