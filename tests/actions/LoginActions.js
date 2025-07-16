import LoginObject from "../pages/LoginObject";

class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async loginUser(username, password) {
    await LoginObject.username().fill(username);
    await LoginObject.password().fill(password);
    await LoginObject.signInButton().click();
  }
}

module.exports = LoginActions;
