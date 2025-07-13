const { test } = require("../fixtures/actionFixture");

test.describe("Home Page Tests", () => {
  test("Go to checkout and login", async ({ actions }) => {
    await actions.home.navigateToCheckout();
  });
});
