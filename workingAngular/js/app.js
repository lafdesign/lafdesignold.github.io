angular
	.module('app',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
			url: '/',
			templateUrl: 'template/home.html',
			controller: 'homeCtrl'	
			
		})
			
	}])
