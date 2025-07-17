const LoginPage = require("../pages/LoginPage");

class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async loginUser(username, password) {
    await LoginPage.username(this.page).fill(username);
    await LoginPage.password(this.page).fill(password);
    await LoginPage.signInButton(this.page).click();
  }
}

module.exports = LoginActions;
