const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutHeading = page.locator('h2.elementor-heading-title:has-text("Checkout")');
  }

  async validate() {
    await expect(this.checkoutHeading).toBeVisible();
  }
}

// 🔁 Singleton instance holder
let instance = null;

// ✅ Called once to initialize the page object
function initCheckoutPage(page) {
  instance = new CheckoutPage(page);
  return instance;
}

// ✅ Use anywhere after initialization
function getCheckoutPage() {
  if (!instance) throw new Error('CheckoutPage not initialized. Call initCheckoutPage(page) first.');
  return instance;
}

module.exports = {
  initCheckoutPage,
  getCheckoutPage
};
