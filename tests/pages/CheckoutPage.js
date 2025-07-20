const CheckoutPage = {
  getCheckoutHeading: (page) => page.locator('h2.elementor-heading-title:has-text("Checkout")'),
}

module.exports = CheckoutPage;