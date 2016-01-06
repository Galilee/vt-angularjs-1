'use strict';

/**
 * Charge les controllers
 * @param app
 */
module.exports = function(app) {
  app.controller('homeController', require('./home'));
  app.controller('demoController', require('./demo'));
};