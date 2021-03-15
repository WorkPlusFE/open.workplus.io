const { jsSDKBar } = require('./getJsSdkBar');
const { lightAppBar } = require('./getLightAppBar');
const { apiSideBar } = require('./getApiBar');
const { themeSideBar } = require('./getThemeBar');
const { devToolsSideBar } = require('./getDevToolsBar');

module.exports = {
  '/light-app/': lightAppBar,
  '/js-sdk/': jsSDKBar,
  '/api/': apiSideBar,
  '/design-specification/': themeSideBar,
  '/dev-tools/': devToolsSideBar,
};
