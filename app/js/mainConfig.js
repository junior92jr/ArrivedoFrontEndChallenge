app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);

app.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $routeProvider
        .when("/add", {
          templateUrl: "./templates/challenge.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }
]);
