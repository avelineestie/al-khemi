'use strict';

angular.module('alKhemiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.recipes = [
        {
            "id":"001",
            "name":"Sandwich",
            "use":"Restores 100 HP",
            "items":[
            {
                "name":"White Bread",
                "num":"1"
            },
            {
                "name":"Tender Beef",
                "num":"1"
            }
            ]
        }
    ];

    console.log($scope.recipes);
  });