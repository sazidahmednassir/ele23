// tests/utils/common.js
/**
 * Common utility functions for Playwright tests
 */
class CommonUtils {
  /**
   * Scroll to the top of the page
   * @param {import('@playwright/test').Page} page
   */
  static async scrollToTop(page) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500); // Small wait for scroll to complete
  }

  static async scrollToBottom(page) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500); // Small wait for scroll to complete
  }


  static async scrollToElement(page, element) {
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Small wait for scroll to complete
  }


  static async waitForElement(element, timeout = 10000) {
    await element.waitFor({ state: 'visible', timeout });
  }

  
}

module.exports = CommonUtils;