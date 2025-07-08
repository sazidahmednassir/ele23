// tests/home.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');


test.describe('eLearning23 Main Pages', () => {

  // Call as an instance method, not a static method
  test('Home page to Proctoring Pro page to Checkout page', async ({ page }) => {
    await HomePage.validateHomepagetoCheckoutPage(page);
  });



});