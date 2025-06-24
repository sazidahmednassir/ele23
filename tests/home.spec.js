// tests/home.spec.js
const { test } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');
const { ProctoringProPage } = require('./pages/ProctoringProPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

test.describe('eLearning23 Main Pages', () => {
  test('Home page loads and logo is visible', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.isLogoVisible();
  });

  test('Navigate to Proctoring Pro page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.gotoProctoringPro();
    const proctoringPro = new ProctoringProPage(page);
    await proctoringPro.isLoaded();
  });

  test('Navigate to Checkout page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.gotoCheckout();
    const checkout = new CheckoutPage(page);
    await checkout.isLoaded();
  });
});
