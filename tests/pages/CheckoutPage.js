// tests/pages/CheckoutPage.js
const { expect } = require('@playwright/test');

class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1, h2, h3'); // Adjust selector as needed
  }

  async isLoaded() {
    await expect(this.heading).toContainText(/checkout/i);
  }
}

module.exports = { CheckoutPage };
