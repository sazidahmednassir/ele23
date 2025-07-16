const HomeObjects = require("../pages/HomeObject");
const LoginObject = require("../pages/LoginObject");
const { expect } = require("@playwright/test");

class HomeActions extends HomeObjects {
  constructor(page) {
    super(page); // ✅ Inherit locators from HomeObjects
    this.login = new LoginObject(page); // ✅ Create login object
  }

  async navigateToCheckout() {
    await this.page.goto("https://elearning23.com/");

    // await expect(this.getHeading()).toContainText(
    //   "Secure Moodle Exams with Proctoring Pro"
    // );

    await this.getProctoringProButton().click();

    await this.login.username().fill("sazidnx23@yopmail.com");
    await this.login.password().fill("Punch@500#$");

    await this.page.waitForTimeout(2000);
  }
}

module.exports = HomeActions;
