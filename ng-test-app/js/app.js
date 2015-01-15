angular
	.module('app',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
			url: '/',
			templateUrl: 'template/home.html'	
		})
			.state('about',{
			url: '/about',
			templateUrl: 'template/about.html'	
		})
	}])
