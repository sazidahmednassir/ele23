// tests/home.spec.js
const { test } = require("../fixture/customfixture");

test.describe("Home Page Tests", () => {

  test.beforeEach(async ({ actions }) => {
    await actions.home.homeUrl();
  });

  test("Verify First heading text", async ({ actions }) => {
    await actions.home.firstHeadingVerify();
  });


  test("Verify Second heading text", async ({ actions }) => {
    await actions.home.secondHeadingverify();
  });

  test("Verify Third heading text", async ({ actions }) => {
    await actions.home.thirdHeadingverify();
  });

  test("Go to checkout and login", async ({ actions }) => {
    await actions.home.navigateToCheckout();
    await actions.login.loginUser();
  
  });
});
