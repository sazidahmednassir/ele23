const HomePage = {
  getProctoringProButton: (page) => page.locator("text=Get proctoring pro"),
  getHeading: (page) =>
    page.locator("text=Secure Online Exam with Moodle and Proctoring Pro"),
  getSecondHeading: (page) => page.locator('text=Seamless Integration with Moodle'),
  getThirdHeading: (page)=> page.locator('text=Trusted by Leading Educational Institutions'),
  getCouponLink: (page) =>
    page.locator("text=Click here to enter your coupon code"),
};

module.exports = HomePage;
