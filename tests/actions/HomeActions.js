const HomePage = require("../pages/HomePage");
const { expect } = require("@playwright/test");

class HomeActions {
  constructor(page) {
    this.page = page;
  }

  async navigateToCheckout() {
    await this.page.goto("https://elearning23.com/");

    await expect(HomePage.getHeading(this.page)).toContainText(
      "Secure Online Exam with Moodle and Proctoring Pro"
    );

    await HomePage.getProctoringProButton(this.page).click();

    await this.page.waitForTimeout(2000);
  }
}

module.exports = HomeActions;
