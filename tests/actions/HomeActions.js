const HomeObjects = require("../pages/HomeObject");
const LoginObject = require("../pages/LoginObject");
const { expect } = require("@playwright/test");

class HomeActions {
  constructor(page) {
    this.page = page;
    this.homeObjects = new HomeObjects(page);
    this.loginObject = new LoginObject(page);
  }

  async navigateToCheckout() {
    await this.page.goto("https://elearning23.com/");
    // await expect(this.homeObjects.getHeading()).toContainText(
    //   "Secure Online Exam with Moodle and Proctoring Pro"
    // );
    await this.homeObjects.getProctoringProButton().click();
    await this.page.waitForTimeout(2000);
  }
}

module.exports = HomeActions;
