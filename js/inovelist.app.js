var iNovelistApp = angular.module('iNovelistApp', [
  'ngRoute',
  'iNovelistControllers'
]);

var iNovelistControllers = angular.module('iNovelistControllers', []);


iNovelistControllers.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

}]);

iNovelistControllers.controller('MainMenuCtrl', function ($scope) {
  $scope.menuItems = [
    {
      'title': 'Натяжные потолки',
      'href': '#/stretchCeiling'
    }
  ];
});

iNovelistApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'blocks/main.html',
        controller: 'MainCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);