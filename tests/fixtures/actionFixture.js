// eslint-disable-next-line
const { test: base } = require("@playwright/test");

const HomeActions = require("../actions/HomeActions");
const LoginActions = require("../actions/LoginActions");

const test = base.extend({
  actions: async ({ page }, use) => {
    const allActions = {
      home: new HomeActions(page),
      login: new LoginActions(page),
    };
    await use(allActions);
  },
});

module.exports = { test };
