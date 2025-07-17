const LoginObject = require("../pages/LoginObject");

class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async loginUser(username, password) {
    await LoginObject.username(this.page).fill(username);
    await LoginObject.password(this.page).fill(password);
    await LoginObject.signInButton(this.page).click();
  }
}

module.exports = LoginActions;
