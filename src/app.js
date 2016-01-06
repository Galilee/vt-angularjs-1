'use strict';

// Dépendances externes
require('angular');
require('angular-ui-router');

var app = angular.module('demo', [
  'ui.router',
]);

// Dépendances internes
require('./controllers')(app);

app
  .constant('_CONST', require('./const'))
  .config(require('./config'))
  .run(function ($rootScope, $state, $location, _CONST) {
    $rootScope.$state = $state;
    $rootScope.const = _CONST;

    $rootScope.$on('$locationChangeStart', function() {
      console.log($location.path());
    });
  });