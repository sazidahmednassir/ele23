class LoginObject {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="log"]');
    this.passwordInput = page.locator('input[name="pwd"]');
    this.loginButton = page.locator('button:has-text("Sign in")');
  }

  username() {
    return this.usernameInput;
  }

  password() {
    return this.passwordInput;
  }

  signInButton() {
    return this.loginButton;
  }
}

module.exports = LoginObject; // 
