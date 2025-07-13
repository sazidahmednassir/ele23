import HomeObjects from '../pages/HomeObject';
import LoginObject from '../pages/LoginObject';
const { expect } = require('@playwright/test');

class HomeActions {
  constructor(page) {
    this.page = page;
    this.home = new HomeObjects(page);
    this.login = new LoginObject(page);
  }

  async navigateToCheckout() {
    await this.page.goto('https://elearning23.com/');
    await expect(this.home.getHeading()).toContainText('Secure Moodle Exams with Proctoring Pro');
    await this.home.getProctoringProButton().click();
    await this.page.waitForTimeout(2000);
    await this.login.username().fill('sazidnx23@yopmail.com');
    await this.login.password().fill('Punch@500#$');
    await this.login.signInButton().click();
  
  }

}

module.exports = HomeActions;

