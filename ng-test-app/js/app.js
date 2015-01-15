angular
	.module('app',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
			url: '/',
			templateUrl: 'templates/home.html'	
		})
			.state('about',{
			url: '/',
			templateUrl: 'templates/about.html'	
		})
	}])
