const LoginPage = {
  username: (page) => page.locator('input[name="log"]'),
  password: (page) => page.locator('input[name="pwd"]'),
  signInButton: (page) => page.locator('button:has-text("Sign in")'),
};

module.exports = LoginPage;
