angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('reviews', {
        url: '/reviews',
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      })
      .state('required', {
        url: '/required',
        templateUrl: 'templates/required.html',
        controller: 'requiredCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })
  }])