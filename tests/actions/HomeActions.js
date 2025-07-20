const HomePage = require("../pages/HomePage");
const { expect } = require("@playwright/test");
const CommonUtils = require("../utils/common");
const { getConfig } = require("../utils/env");

class HomeActions {
  constructor(page) {
    this.page = page;
  }

  async homeUrl(){
    const config = getConfig();
    await this.page.goto(config.baseUrl);
  }

  async headingverify(){
    await expect(HomePage.getHeading(this.page)).toContainText(
      "Secure Online Exam with Moodle and Proctoring Pro"
    );
  }

  async secondHeadingverify(){
    const secondHeading = HomePage.getSecondHeading(this.page);
    await CommonUtils.scrollToElement(this.page, secondHeading);
    await expect(secondHeading).toContainText(
      "Seamless Integration with Moodle"
    );
  }

  async thirdHeadingverify(){
    const thirdHeading = HomePage.getThirdHeading(this.page);
    await CommonUtils.scrollToElement(this.page, thirdHeading);
    await expect(thirdHeading).toContainText(
      "Trusted by Leading Educational Institutions"
    );
  }
  
  async navigateToCheckout() {
    await HomePage.getProctoringProButton(this.page).click();

    await this.page.waitForTimeout(2000);

  }
}

module.exports = HomeActions;
