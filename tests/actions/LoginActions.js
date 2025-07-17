const LoginObject = require("../pages/LoginObject");

class LoginActions {
  constructor(page) {
    this.page = page;
    this.loginObject = new LoginObject(page);
  }

  async loginUser(username, password) {
    await this.loginObject.username().fill(username);
    await this.loginObject.password().fill(password);
    await this.loginObject.signInButton().click();
  }
}

module.exports = LoginActions;
