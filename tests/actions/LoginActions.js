const LoginPage = require("../pages/LoginPage");
const CheckoutPage = require("../pages/CheckoutPage");
const CommonUtils = require("../utils/common");
const { getConfig } = require("../utils/env");
const { expect } = require("@playwright/test");

class LoginActions {
  constructor(page) {
    this.page = page;
  }

 

  async loginUser() {
    const config = getConfig();
    await LoginPage.username(this.page).fill(config.credentials.username);
    await LoginPage.password(this.page).fill(config.credentials.password);

    await LoginPage.signInButton(this.page).click();
    
    const checkoutHeading = CheckoutPage.getCheckoutHeading(this.page);
    await CommonUtils.waitForElement(checkoutHeading);
   
    await expect(checkoutHeading).toContainText("Checkout");
  }
}

module.exports = LoginActions;
