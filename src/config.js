'use strict';

var env = require('./env');

/**
 * Gestion de la configuration du moteur d'Angular (ici les routes)
 * @type {*[]}
 */
module.exports = ['$stateProvider', '$urlRouterProvider', '_CONST',
  function ($stateProvider, $urlRouterProvider, _CONST) {
    var routes = _CONST.ROUTES;

    $stateProvider
      .state(routes.HOME, {
        url: '/home',
        templateUrl: env.templatePath('home.html')
      })
      .state(routes.DEMO, {
        url: '/demo',
        templateUrl: env.templatePath('demo.html'),
      })
    ;

    $urlRouterProvider.otherwise('/home');
  }
];