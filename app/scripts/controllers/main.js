'use strict';

angular.module('alKhemiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.predicate = 'id';

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
        },
        {
            "id":"002",
            "name":"Fishburger",
            "use":"Restores 150 HP",
            "items":[
                {
                    "name":"White Bread",
                    "num":"2"
                },
                {
                    "name":"Dumbflounder",
                    "num":"1"
                },
                {
                    "name":"Crispy Lettuce",
                    "num":"1"
                }
            ]
        },
        {
            "id":"003",
            "name":"Cheeseburger",
            "use":"Restores 250 HP",
            "items":[
                {
                    "name":"Sandwich",
                    "num":"1"
                },
                {
                    "name":"Crispy Lettuce",
                    "num":"1"
                },
                {
                    "name":"Glowshrimp",
                    "num":"1"
                }
            ]
        },
        {
            "id":"004",
            "name":"Tonic",
            "use":"Completely restores HP",
            "items":[
                {
                    "name":"Pixie Dew",
                    "num":"1"
                },
                {
                    "name":"Old Oak Leaves",
                    "num":"2"
                },
                {
                    "name":"Seeds of Discord",
                    "num":"2"
                }
            ]
        },
        {
            "id":"005",
            "name":"Pixie Dew",
            "use":"All party members recover 100HP",
            "items":[
                {
                    "name":"Fogdrop",
                    "num":"1"
                },
                {
                    "name":"Booster Shoots",
                    "num":"3"
                },
                {
                    "name":"Springwater",
                    "num":"3"
                }
            ]
        },
        {
            "id":"006",
            "name":"Sprite Dew",
            "use":"All party members recover 200HP",
            "items":[
                {
                    "name":"Pixie Dew",
                    "num":"1"
                },
                {
                    "name":"Sour Grapes",
                    "num":"1"
                },
                {
                    "name":"Slumberknot Leaves",
                    "num":"3"
                }
            ]
        },
        {
            "id":"007",
            "name":"Strong Coffee",
            "use":"Restores 30MP",
            "items":[
                {
                    "name":"Iced Coffee",
                    "num":"2"
                },
                {
                    "name":"Springwater",
                    "num":"1"
                }
            ]
        },
        {
            "id":"008",
            "name":"Cappuccino",
            "use":"Restores 70MP",
            "items":[
                {
                    "name":"Strong Coffee",
                    "num":"1"
                },
                {
                    "name":"Creamy Milk",
                    "num":"3"
                },
                {
                    "name":"Slumberknot Leaves",
                    "num":"1"
                }
            ]
        },
        {
            "id":"009",
            "name":"Espresso",
            "use":"Restores 150MP",
            "items":[
                {
                    "name":"Strong Coffee",
                    "num":"2"
                },
                {
                    "name":"Fogdrop",
                    "num":"1"
                },
                {
                    "name":"Slumberknot Leaves",
                    "num":"3"
                }
            ]
        },
        {
            "id":"010",
            "name":"Sage's Secret",
            "use":"Restores 100HP and 100MP",
            "items":[
                {
                    "name":"Tonic",
                    "num":"1"
                },
                {
                    "name":"Snowflake",
                    "num":"1"
                },
                {
                    "name":"Glowcap",
                    "num":"3"
                }
            ]
        },
        {
            "id":"011",
            "name":"Phoenix Breath",
            "use":"All party members recover from unconsciousness",
            "items":[
                {
                    "name":"Phoenix Feather",
                    "num":"1"
                },
                {
                    "name":"Coldstone",
                    "num":"1"
                },
                {
                    "name":"Plainswort",
                    "num":"3"
                }
            ]
        },
        {
            "id":"012",
            "name":"All-Be-Gone",
            "use":"Removes all status ailments except unconsciousness",
            "items":[
                {
                    "name":"Old Oak Leaves",
                    "num":"1"
                },
                {
                    "name":"Booster Shoots",
                    "num":"1"
                },
                {
                    "name":"Plainswort Flower",
                    "num":"1"
                }
            ]
        }
    ];

    console.log($scope.recipes);
  });