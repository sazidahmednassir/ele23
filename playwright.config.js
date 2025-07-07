// playwright.config.js
// Playwright configuration file
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 100000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: "Google Chrome",
      use: {
        channel: "chrome",
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"]
        }
      }
    },
    // {
    //   name: 'Chromium',
    //   use: { browserName: 'chromium' },
    // },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...require('@playwright/test').devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...require('@playwright/test').devices['iPhone 12'] },
    // },
  ],
};

module.exports = config;
