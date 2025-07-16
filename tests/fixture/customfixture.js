const { test: base } = require("@playwright/test");
const HomeActions = require("../actions/HomeActions");
const LoginActions = require("../actions/LoginActions"); // if needed

exports.test = base.extend({
  actions: async ({ page }, use) => {
    const actions = {
      home: new HomeActions(page),
      // login: new LoginActions(page), // add more as needed
    };
    await use(actions);
  },
});
