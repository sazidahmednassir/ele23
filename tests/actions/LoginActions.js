import LoginObject from "../pages/LoginObject";

class LoginActions {
  constructor(page) {
    this.page = page;
    this.login = new LoginObject(page);
  }

  async loginUser(username, password) {
    await this.login.username().fill(username);
    await this.login.password().fill(password);
    await this.login.signInButton().click();
  }
}

module.exports = LoginActions;
