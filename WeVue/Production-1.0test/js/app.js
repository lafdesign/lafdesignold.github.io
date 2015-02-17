angular
	.module('app', [
		'ui.router'
	])

	.config(['$urlRouterProvier', '$stateProvider', function ($stateProvider, $urlRouterProvier){
		$urlRouterProvier.otherwise('/');

		$stateProvider
		  .state('security', {
			url:'/security',
			templateUrl: 'templates/security.html',
			controller: 'SecurityControl'
		})
		  .state('showcase', {
			url:'/showcase',
			templateUrl: 'templates/showcase.html',
			controller: 'ShowcaseControl'
		})
		  .state('form', {
			url:'/form',
			templateUrl: 'templates/form.html',
			controller: 'FormControl'
		})
	}])