// tests/pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="log"]');
    this.passwordInput = page.locator('input[name="pwd"]');
    this.loginButton = page.locator('button:has-text("Sign in")');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForTimeout(5000);
  }
}

module.exports = { LoginPage };
