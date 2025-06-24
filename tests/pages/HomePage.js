// tests/pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logo = page.locator('img[alt="eLearning23"]');
    this.proctoringProLink = page.getByRole('link', { name: /proctoring pro/i });
    this.checkoutLink = page.getByRole('link', { name: /checkout/i });
  }

  async goto() {
    await this.page.goto('https://elearning23.com/');
  }

  async isLogoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async gotoProctoringPro() {
    await this.proctoringProLink.click();
  }

  async gotoCheckout() {
    await this.checkoutLink.click();
  }
}

module.exports = { HomePage };
