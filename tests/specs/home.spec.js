// tests/home.spec.js
const { test } = require("../fixture/customfixture");

test.describe("Home Page Tests", () => {
  test("Go to checkout and login", async ({ actions }) => {
    await actions.home.navigateToCheckout();
    await actions.login.loginUser("sazidnx23@yopmail.com", "Punch@500#$");
  });
});
