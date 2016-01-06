'use strict';

/**
 * Controller Demo
 * @type {*[]}
 */
module.exports = ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    $scope.people = [
      { "firstname": "Martin", "lastname": "Catty" },
      { "firstname": "Nicolas", "lastname": "Cavigneaux" },
    ];

    $scope.showPeople = true;

    $scope.add = function(person) {
      $scope.people.push(person);
      $scope.person = {};
    }
  }
];