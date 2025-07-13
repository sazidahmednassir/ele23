import {test} from '@playwright/test';
const { initAllActions, getHomeActions } = require('../actions');

test.describe('Home Page Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    initAllActions(page); // ✅ initialize once before each test
  });

  test('Navigate home to Checkout page', async () => {
    await getHomeActions().navigateToCheckout();
  });

});
