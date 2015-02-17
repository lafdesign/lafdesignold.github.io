angular
	.module('wvapp',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
			url: '/home',
			templateUrl: 'template/home.html',
			controller: 'homeCtrl'	
			
		})
			
	}])
