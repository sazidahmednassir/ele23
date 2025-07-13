import HomeActions from '../actions/HomeActions';
let instance = {};

function initAllActions(page) {
  instance.home = new HomeActions(page);
}

function getHomeActions() {
  if (!instance.home) throw new Error('HomeActions not initialized. Call initAllActions(page) first.');
  return instance.home;
}

module.exports = {
  initAllActions,
  getHomeActions
};
