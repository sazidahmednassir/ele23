// tests/home.spec.js
const { test } = require("../fixture/customfixture");

test.describe("Home Page Tests", () => {
  test("Go to checkout and login", async ({ actions }) => {
    await actions.home.navigateToCheckout();
  });
});
