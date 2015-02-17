angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvier', '$stateProvider', function($stateProvider, $urlRouterProvier) {
		$urlRouterProvier.otherwise('/');

		$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})
		  .state('security', {
			url:'/security',
			templateUrl: 'templates/security.html',
			controller: 'securityController'
		})
		  .state('showcase', {
			url:'/showcase',
			templateUrl: 'templates/showcase.html',
			controller: 'showcaseController'
		})
		  .state('form', {
			url:'/form',
			templateUrl: 'templates/form.html',
			controller: 'formController'
		})
	}])