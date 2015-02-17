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
			controller: 'securityControl'
		})
		  .state('showcase', {
			url:'/showcase',
			templateUrl: 'templates/showcase.html',
			controller: 'showcaseControl'
		})
	}])