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

  async firstSectionVerify(){
    await expect(HomePage.getHeading(this.page)).toContainText(
      "Secure Online Exam with Moodle and Proctoring Pro"
    );
   const firstProctoringDescription = HomePage.getFirstProctoringDescription(this.page);
    await expect(firstProctoringDescription).toContainText(
      "Enhance academic integrity with our powerful Moodle Proctoring Pro Plugin"
    );

    const firstButton = HomePage.getFirstButton(this.page);
    await expect(firstButton).toBeVisible();

    const secondButton= HomePage.getSecondButton(this.page);
    await expect(secondButton).toBeVisible();

    const video = HomePage.getVideo(this.page);
    await expect(video).toBeVisible();

    const institutionsLogoText = HomePage.getFirstLogoText(this.page);
    await expect(institutionsLogoText).toContainText(
      "Trusted by 1800+ institutions"
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
