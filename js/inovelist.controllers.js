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
      'title': 'Книга',
      'href': '#!/books/1'
    },
    {
      'title': 'Персонажи',
      'href': '#!/characters'
    }
  ];
});