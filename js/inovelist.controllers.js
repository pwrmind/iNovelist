var iNovelistControllers = angular.module('iNovelistControllers', []);

iNovelistControllers.controller('BooksCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.books = [
    {
      id: 0,
      title: "first book"
    },
    {
      id: 1,
      title: "second book"
    }
  ];
}]);

iNovelistControllers.controller('BookCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
}]);

iNovelistControllers.controller('PreviewCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
    $scope.chapters = [];

    if(localStorage["chapters"]) {
      $scope.chapters = JSON.parse(localStorage["chapters"]);
    }
}]);

iNovelistControllers.controller('ChaptersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;

    $scope.selectedScene = {};

    $scope.selectScene = function(scene) {
      $scope.selectedScene = scene;
    };

    $scope.addScene = function(chapter) {
      var newScene = {
        id: 0,
        name: "Новая сцена",
        text: ""
      };
      chapter.scenes.push(newScene);
      $scope.selectedScene = newScene;
    };

    if(localStorage["chapters"]) {
      $scope.chapters = JSON.parse(localStorage["chapters"]);
    } else {
      $scope.chapters = [
        {
          id: 0,
          name: "Глава 1",
          description: "Местная кухня, Для особых случаев, Романтический, Для семей с детьми, Живописный вид",
          scenes: [
            {
              id:0,
              name: "Сцена 1",
              text: "На реке. Лодку покачивает на волнах. Мешок измазанный черным. На берегу они. Река несёт по течению лодку. Луна освещает белую дорожку по воде. Дыхание и сердцебиение сложно восстановить."
            },
            {
              id:1,
              name: "Сцена 2",
              text:"Он один. Несколько человек преграждают ему путь. Взрыв авто припаркованного в нескольких метрах от входа."
            }
          ]
        },
        {
          id: 1,
          name: "Глава 2",
          description: "Деловые встречи, Живописный вид, Для особых случаев, Романтический, Местная кухня",
          scenes: [
            {
              id:0,
              name: "Сцена 1",
              text:"От скорости у него снова начало всё сливаться."
            },
            {
              id:1,
              name: "Сцена 2",
              text:"Месиво, кишки повсюду. Его взгляд - пелена перед глазами. Палач. "
            }
          ]
        }
      ];
    }

    $scope.$watch('chapters', function(newValue, oldValue) {
      localStorage["chapters"] = JSON.stringify(newValue);
    }, true);
}]);

iNovelistControllers.controller('PlacesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
    $scope.selectedPlace = {};
  
    $scope.selectPlace = function(place) {
      $scope.selectedPlace = place;
    };

    $scope.places = [
      {
        id: 0,
        name: "58 Tour Eiffel",
        description: "Местная кухня, Для особых случаев, Романтический, Для семей с детьми, Живописный вид"
      },
      {
        id: 1,
        name: "Le Jules Verne",
        description: "Деловые встречи, Живописный вид, Для особых случаев, Романтический, Местная кухня"
      }
    ];
}]);

iNovelistControllers.controller('CharactersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.selectedCharacter = {};
  
  $scope.selectCharacter = function(character){
    //console.log(character);
    $scope.selectedCharacter = character;
  };

  $scope.characters = [
    {
      id: 0,
      firstName: "Тайлер",
      lastName: "Дёрден",
      alias: "",
      age: 30, 
      gender: "мужской",
      hometown: ""
    },
    {
      id: 1,
      firstName: "Марла",
      lastName:"Зингер",
      alias: "",
      age: 30, 
      gender: "женский",
      hometown: ""
    },
    {
      id: 1,
      firstName: "Роберт",
      lastName: "Полсон",
      alias: "Большой Боб",
      age: 40, 
      gender: "мужской",
      hometown: ""
    }
  ];
}]);

iNovelistControllers.controller('CharacterCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
}]);

iNovelistControllers.controller('MainMenuCtrl', function ($scope) {
  $scope.go = function ( href ) {
    location.hash = href;
  };
  $scope.menuItems = [
    {
      'title': 'Книги (Books)',
      'href': '#!/books'
    },
    {
      'title': 'Главы',
      'href': '#!/chapters'
    },
    {
      'title': 'Предпросмотр',
      'href': '#!/preview'
    },
    {
      'title': 'Персонажи',
      'href': '#!/characters'
    },
    {
      'title': 'Места (Places)',
      'href': '#!/places'
    }
  ];
});