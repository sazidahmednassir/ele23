const HomeObjects = {
  getProctoringProButton: (page) => page.locator("text=Get proctoring pro"),
  getHeading: (page) =>
    page.locator("text=Secure Moodle Exams with Proctoring Pro"),
  getCouponLink: (page) =>
    page.locator("text=Click here to enter your coupon code"),
};

module.exports = HomeObjects;
