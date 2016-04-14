angular
  .module('golApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'golApp.controller'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'GolController'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
