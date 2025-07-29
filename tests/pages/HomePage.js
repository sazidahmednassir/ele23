const HomePage = {
  getProctoringProButton: (page) => page.locator("text=Get proctoring pro"),
  getHeading: (page) =>
    page.locator("text=Secure Online Exam with Moodle and Proctoring Pro"),
  getSecondHeading: (page) => page.locator('text=Seamless Integration with Moodle'),
  getFirstProctoringDescription: (page)=> page.locator('text=Enhance academic integrity with our powerful Moodle Proctoring Pro Plugin'),
  getFirstButton: (page)=>  page.locator('a:has-text("Get proctoring pro")'),
  getSecondButton : (page)=>  page.locator('text=View Details'),
  getFirstLogoText: (page)=> page.locator('div.elementor-element.elementor-element-2379cbb:has-text("Trusted by 1800+ institutions")'),
  getVideo: (page)=> page.locator('div.video-container:has(iframe[src*="youtube.com/embed/eA6lgsVaiBU"])'),
  getThirdHeading: (page)=> page.locator('text=Trusted by Leading Educational Institutions'),
  getCouponLink: (page) =>
    page.locator("text=Click here to enter your coupon code"),

};

module.exports = HomePage;
