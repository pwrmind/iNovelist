var iNovelistApp = angular.module('iNovelistApp', [
  'ngRoute',
  'iNovelistControllers'
]);

iNovelistApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'blocks/books.html',
        controller: 'BooksCtrl'
      }).
      when('/books/:bookId', {
        templateUrl: 'blocks/book.html',
        controller: 'BookCtrl'
      }).
      when('/characters', {
        templateUrl: 'blocks/characters.html',
        controller: 'CharactersCtrl'
      }).
      when('/characters/:characterId', {
        templateUrl: 'blocks/character.html',
        controller: 'CharacterCtrl'
      }).
      otherwise({
        redirectTo: '/characters'
      });

      //$locationProvider.html5Mode(true);
  }]);