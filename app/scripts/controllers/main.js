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
        },
        {
            "id":"013",
            "name":"Milk Chocolate",
            "items":[
                {
                    "name":"Chocolate",
                    "num":"1"
                },
                {
                    "name":"Creamy Milk",
                    "num":"1"
                },
                {
                    "name":"Bumbler Honey",
                    "num":"1"
                }
            ]
        },
        {
            "id":"014",
            "name":"Fairy Chocolate",
            "items":[
                {
                    "name":"Milk Chocolate",
                    "num":"1"
                },
                {
                    "name":"Angula",
                    "num":"1"
                },
                {
                    "name":"Rings-a-Bell",
                    "num":"1"
                }
            ]
        },
        {
            "id":"015",
            "name":"Chocolate Bonbon",
            "items":[
                {
                    "name":"Chocolate",
                    "num":"2"
                },
                {
                    "name":"Fogdrop",
                    "num":"2"
                },
                {
                    "name":"Bumbler Honey",
                    "num":"2"
                }
            ]
        },
        {
            "id":"016",
            "name":"Snowdrop Bonbon",
            "items":[
                {
                    "name":"Chocolate Bonbon",
                    "num":"1"
                },
                {
                    "name":"Caramel",
                    "num":"2"
                },
                {
                    "name":"Snowflake",
                    "num":"1"
                }
            ]
        },
        {
            "id":"017",
            "name":"Princess Chocolate",
            "items":[
                {
                    "name":"Fairy Chocolate",
                    "num":"1"
                },
                {
                    "name":"Snowdrop Bonbon",
                    "num":"1"
                },
                {
                    "name":"Crownberries",
                    "num":"2"
                }
            ]
        },
        {
            "id":"018",
            "name":"Creamy Flan",
            "items":[
                {
                    "name":"Flan",
                    "num":"1"
                },
                {
                    "name":"Dumpty Eggs",
                    "num":"2"
                },
                {
                    "name":"Bumbler Honey",
                    "num":"1"
                }
            ]
        },
        {
            "id":"019",
            "name":"Babana Flan",
            "items":[
                {
                    "name":"Creamy Flan",
                    "num":"1"
                },
                {
                    "name":"Babana",
                    "num":"2"
                },
                {
                    "name":"Gnomebeard",
                    "num":"1"
                }
            ]
        },
        {
            "id":"020",
            "name":"Frosty Flan",
            "items":[
                {
                    "name":"Flan",
                    "num":"2"
                },
                {
                    "name":"Snowflake",
                    "num":"1"
                },
                {
                    "name":"Bumbler Honey",
                    "num":"2"
                }
            ]
        },
        {
            "id":"021",
            "name":"Fruit Flan",
            "items":[
                {
                    "name":"Frosty Flan",
                    "num":"1"
                },
                {
                    "name":"Green Grapes",
                    "num":"2"
                },
                {
                    "name":"Sour Grapes",
                    "num":"1"
                }
            ]
        },
        {
            "id":"022",
            "name":"Fantastic Flan",
            "items":[
                {
                    "name":"Babana Flan",
                    "num":"1"
                },
                {
                    "name":"Fruit Flan",
                    "num":"1"
                },
                {
                    "name":"Big Babana",
                    "num":"2"
                }
            ]
        },
        {
            "id":"023",
            "name":"Carrot Cake",
            "items":[
                {
                    "name":"Cake",
                    "num":"1"
                },
                {
                    "name":"Crunchy Carrot",
                    "num":"3"
                }
            ]
        },
        {
            "id":"024",
            "name":"Carnation Cake",
            "items":[
                {
                    "name":"Carrot Cake",
                    "num":"1"
                },
                {
                    "name":"Dumpty Eggs",
                    "num":"2"
                },
                {
                    "name":"Angula",
                    "num":"1"
                }
            ]
        },
        {
            "id":"025",
            "name":"Breeze Cake",
            "items":[
                {
                    "name":"Cake",
                    "num":"2"
                },
                {
                    "name":"Caramel",
                    "num":"2"
                },
                {
                    "name":"Gustplume",
                    "num":"1"
                }
            ]
        },
        {
            "id":"026",
            "name":"Patty Cake",
            "items":[
                {
                    "name":"Breeze Cake",
                    "num":"1"
                },
                {
                    "name":"Rumblenuts",
                    "num":"1"
                },
                {
                    "name":"Power Stone",
                    "num":"1"
                }
            ]
        },
        {
            "id":"027",
            "name":"Hot Cake",
            "items":[
                {
                    "name":"Carnation Cake",
                    "num":"1"
                },
                {
                    "name":"Drakestone",
                    "num":"1"
                },
                {
                    "name":"Crownberries",
                    "num":"2"
                }
            ]
        },
        {
            "id":"028",
            "name":"Sour Sundae",
            "items":[
                {
                    "name":"Sundae",
                    "num":"1"
                },
                {
                    "name":"Yogurt",
                    "num":"3"
                }
            ]
        },
        {
            "id":"047",
            "name":"Champion's Sword",
            "items":[
                {
                    "name":"Soldier's Sword",
                    "num":"1"
                },
                {
                    "name":"Iron Diamond",
                    "num":"2"
                },
                {
                    "name":"Raw Steel",
                    "num":"2"
                }
            ]
        },
        {
            "id":"048",
            "name":"Lost Sword",
            "items":[
                {
                    "name":"Tachestone",
                    "num":"1"
                },
                {
                    "name":"Bass Bell",
                    "num":"2"
                },
                {
                    "name":"Rings-a-Bell",
                    "num":"3"
                }
            ]
        },
        {
            "id":"049",
            "name":"Sainted Sword",
            "items":[
                {
                    "name":"Greatsword",
                    "num":"1"
                },
                {
                    "name":"Meteorite Fragment",
                    "num":"2"
                },
                {
                    "name":"Powerstone",
                    "num":"3"
                }
            ]
        },
        {
            "id":"050",
            "name":"Skyfall Sword",
            "items":[
                {
                    "name":"Sainted Sword",
                    "num":"1"
                },
                {
                    "name":"Star Pearl",
                    "num":"2"
                },
                {
                    "name":"Meteorite Fragment",
                    "num":"3"
                }
            ]
        },
        {
            "id":"051",
            "name":"Primordial Sword",
            "items":[
                {
                    "name":"Skyfall Sword",
                    "num":"1"
                },
                {
                    "name":"Kaleidostone",
                    "num":"5"
                },
                {
                    "name":"Troll's Tears",
                    "num":"5"
                }
            ]
        }
    ];

    console.log($scope.recipes);
  });