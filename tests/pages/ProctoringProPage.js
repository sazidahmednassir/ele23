// tests/pages/ProctoringProPage.js
const { expect } = require('@playwright/test');

class ProctoringProPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.buyNowButton = page.locator('a.elementor-button .elementor-button-text', { hasText: 'Buy Now' });
  }

  async clickBuyNow() {
   // Wait for the button to be attached to the DOM and visible
   await this.buyNowButton.first().waitFor({ state: 'visible', timeout: 15000 });
   await this.buyNowButton.first().click();
   await this.page.waitForTimeout(5000); // Reduce wait for faster feedback
  }
}

module.exports = { ProctoringProPage };
