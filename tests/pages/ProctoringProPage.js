// tests/pages/ProctoringProPage.js
const { expect } = require('@playwright/test');

class ProctoringProPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1, h2, h3'); // Adjust selector as needed
  }

  async isLoaded() {
    await expect(this.heading).toContainText(/proctoring pro/i);
  }
}

module.exports = { ProctoringProPage };
