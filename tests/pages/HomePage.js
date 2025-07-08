// tests/pages/HomePage.js
const { expect } = require('@playwright/test');
const { ProctoringProPage } = require('./ProctoringProPage');
const { LoginPage } = require('./LoginPage');
const { CheckoutPage } = require('./CheckoutPage');

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

  static async validateHomepagetoCheckoutPage(page){
     const home = new HomePage(page);
    await home.goto();
    await home.clickGetProctoringPro();
    const proctoringProPage = new ProctoringProPage(page);
    await proctoringProPage.clickBuyNow();
    const loginPage = new LoginPage(page);
    await loginPage.login('sazidnx23@yopmail.com', 'Punch@500#$');
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.checkoutPageValidation();
  }
}

module.exports = { HomePage };
