// tests/home.spec.js
const { test } = require("@playwright/test");
const HomeActions = require("../actions/HomeActions");
const LoginActions = require("../actions/LoginActions");

let home;
let login;

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    home = new HomeActions(page);
    login = new LoginActions(page);
  });
  test("Go to checkout and login", async ({ page }) => {
    await home.navigateToCheckout();
    await login.loginUser("sazidnx23@yopmail.com", "Punch@500#$");
  });
});
