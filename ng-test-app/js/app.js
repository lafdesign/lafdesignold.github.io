angular
	.module('app',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
			url: '/',
			template: 'home'	
		})
			.state('about',{
			url: '/',
			templateUrl: 'template/about.html'	
		})
	}])
