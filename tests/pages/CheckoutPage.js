// tests/pages/CheckoutPage.js
const { expect } = require('@playwright/test');

class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutHeading = page.locator('h2.elementor-heading-title:has-text("Checkout")');

  }

  async checkoutPageValidation() {
  
    await this.checkoutHeading.isVisible();
    
  }
}

module.exports = { CheckoutPage };
