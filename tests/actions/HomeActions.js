const HomeObjects = require("../pages/HomeObject");
const { expect } = require("@playwright/test");

class HomeActions {
  constructor(page) {
    this.page = page;
  }

  async navigateToCheckout() {
    await this.page.goto("https://elearning23.com/");

    // await expect(this.getHeading()).toContainText(
    //   "Secure Moodle Exams with Proctoring Pro"
    // );

    await HomeObjects.getProctoringProButton(this.page).click();

    await this.page.waitForTimeout(2000);
  }
}

module.exports = HomeActions;
