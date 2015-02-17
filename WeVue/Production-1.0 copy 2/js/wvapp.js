angular
	.module('wvapp',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
			url: '/',
			templateUrl: 'template/home.html',
			controller: 'homeCtrl'	
			
		})
			
	}])
