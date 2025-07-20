const LoginPage = require("../pages/LoginPage");
const CheckoutPage = require("../pages/CheckoutPage");
const CommonUtils = require("../utils/common");
const { expect } = require("@playwright/test");

class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async loginUser(username, password) {
    
    await LoginPage.username(this.page).fill(username);
    await LoginPage.password(this.page).fill(password);
    
    await LoginPage.signInButton(this.page).click();
    
    const checkoutHeading = CheckoutPage.getCheckoutHeading(this.page);
    await CommonUtils.waitForElement(checkoutHeading);
   
    await expect(checkoutHeading).toContainText("Checkout");
  }
}

module.exports = LoginActions;
