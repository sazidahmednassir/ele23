// tests/pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getProctoringProButton = page.locator('text=Get proctoring pro');
    this.heading = page.locator('text=Secure Moodle Exams with Proctoring Pro');


  }

  async goto() {
    await this.page.goto('https://elearning23.com/');
    await this.page.waitForTimeout(10000);
    await expect(this.heading).toContainText('Secure Moodle Exams with Proctoring Pro');

  }
  async clickGetProctoringPro() {
    await this.getProctoringProButton.click();
    await this.page.waitForTimeout(10000);
  }
}

module.exports = { HomePage };
