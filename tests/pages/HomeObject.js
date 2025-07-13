class HomeObjects {
  constructor(page) {
    this.page = page;
    this.proctoringProButton = page.locator('text=Get proctoring pro');
    this.heading = page.locator('text=Secure Moodle Exams with Proctoring Pro');
    this.couponLink = page.locator('text=Click here to enter your coupon code');
  }


  getHeading() {
    return this.heading;
  }

  getProctoringProButton() {
    return this.proctoringProButton;
  }
}

module.exports= HomeObjects;
