// tests/home.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');
const { ProctoringProPage } = require('./pages/ProctoringProPage');

test.describe('eLearning23 Main Pages', () => {

  test('Home page to Proctoring Pro page to Checkout page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickGetProctoringPro();
    const proctoringProPage = new ProctoringProPage(page);
    await proctoringProPage.clickBuyNow();
  });

  
});
