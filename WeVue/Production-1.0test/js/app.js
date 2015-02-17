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
			controller: 'HomeController'
		})
		  .state('security', {
			url:'/security',
			templateUrl: 'templates/security.html',
			controller: 'SecurityController'
		})
		  .state('showcase', {
			url:'/showcase',
			templateUrl: 'templates/showcase.html',
			controller: 'ShowcaseController'
		})
		  .state('form', {
			url:'/form',
			templateUrl: 'templates/form.html',
			controller: 'FormController'
		})
	}])