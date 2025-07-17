const HomePage = {
  getProctoringProButton: (page) => page.locator("text=Get proctoring pro"),
  getHeading: (page) =>
    page.locator("text=Secure Online Exam with Moodle and Proctoring Pro"),
  getCouponLink: (page) =>
    page.locator("text=Click here to enter your coupon code"),
};

module.exports = HomePage;
