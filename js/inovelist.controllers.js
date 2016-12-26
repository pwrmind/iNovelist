delete localStorage["chapters"];
window.addEventListener("beforeunload", function(){
  localStorage["model"] = JSON.stringify(MODEL || {});
});

var MODEL = {};

if(localStorage["model"]) {
  MODEL = JSON.parse(localStorage["model"]);
} else {
  MODEL = {
    currentBook: {},
    books: [
      {
        id: 0,
        title: "first book",
        characters: [
          {
            id: 0,
            firstName: "Тайлер",
            lastName: "Дёрден",
            alias: "",
            age: 30, 
            gender: "мужской",
            hometown: "",
            type: "protagonist"
          },
          {
            id: 1,
            firstName: "Марла",
            lastName:"Зингер",
            alias: "",
            age: 30, 
            gender: "женский",
            hometown: "",
            type: "protagonist"
          },
          {
            id: 1,
            firstName: "Роберт",
            lastName: "Полсон",
            alias: "Большой Боб",
            age: 40, 
            gender: "мужской",
            hometown: "",
            type: "secondary"
          }
        ],
        chapters: [
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
        ],
        places: [
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
        ]
      }
    ],
    menuItems: [
      {
        title: "Книги (Books)",
        href: "#!/books",
        icon: "./images/books_128x128.png"
      },
      {
        title: "Главы",
        href: "#!/chapters",
        icon: ""
      },
      {
        title: "Персонажи",
        href: "#!/characters",
        icon: "./images/characters_128x128_.png"
      },
      {
        title: "Места (Places)",
        href: "#!/places",
        icon: "./images/places_128x128.png"
      },
      {
        title: "Предпросмотр",
        href: "#!/preview",
        icon: ""
      }
    ]
  };
}
MODEL.currentBook = MODEL.books[0];

var iNovelistControllers = angular.module('iNovelistControllers', []);

iNovelistControllers.controller('BooksCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.books = MODEL.books;
  $scope.selectedBook = MODEL.currentBook || {};

  $scope.selectBook = function(book) {
    $scope.selectedBook = MODEL.currentBook = book;
  };

  $scope.addBook = function() {
    var newBook = {
      id: 1,
      title: "second book",
      characters: [],
      places: [],
      chapters: [
        {
          id: 0,
          name: "Новая глава",
          description: "Новая глава",
          scenes: []
        }
      ]
    };
    MODEL.books.push(newBook);
    $scope.selectedBook = MODEL.currentBook = newBook;
  };
}]);

iNovelistControllers.controller('BookCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.params = $routeParams;
}]);

iNovelistControllers.controller('PreviewCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.params = $routeParams;
  $scope.chapters = MODEL.currentBook.chapters;
}]);

iNovelistControllers.controller('ChaptersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
    $scope.chapters = MODEL.currentBook.chapters;

    $scope.selectedScene = {};

    $scope.selectScene = function(scene) {
      $scope.selectedScene = scene;
    };

    $scope.addChapter = function() {
      var newChapter = {
        id: 0,
        name: "Новая глава",
        description: "Новая глава",
        scenes: []
      };
      MODEL.currentBook.chapters.push(newChapter);
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
}]);

iNovelistControllers.controller('PlacesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
    $scope.selectedPlace = {};
    $scope.places = MODEL.currentBook.places;
  
    $scope.selectPlace = function(place) {
      $scope.selectedPlace = place;
    };

    $scope.addPlace = function() {
      var newPlace = {
        id: 0,
        name: "Название",
        description: "Описание"
      };
      $scope.places.push(newPlace);
      $scope.selectedPlace = newPlace;
    };
}]);

iNovelistControllers.controller('CharactersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.selectedCharacter = {};
  $scope.characters = MODEL.currentBook.characters;
  
  $scope.selectCharacter = function(character){
    $scope.selectedCharacter = character;
  };

  $scope.addCharacter = function(type) {
      var newCharacter = {
        id: 0,
        firstName: "Имя",
        lastName: "Фамилия",
        alias: "Псевдоним",
        age: 0, 
        gender: "пол",
        hometown: "родной город",
        type: type
      };
      $scope.characters.push(newCharacter);
      $scope.selectedCharacter = newCharacter;
    };
}]);

iNovelistControllers.controller('CharacterCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.params = $routeParams;
}]);

iNovelistControllers.controller('MainMenuCtrl', function ($scope) {
  $scope.menuItems = MODEL.menuItems;
  $scope.go = function ( href ) {
    location.hash = href;
  };
});