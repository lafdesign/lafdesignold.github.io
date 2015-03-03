angular
	.module('app',[
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
			
		$stateProvider
			.state('about', {
			url: '/about',
			templateUrl: 'template/about.html',
			controller: 'aboutCtrl'	
			
		})

		$stateProvider
			.state('contact', {
			url: '/contact',
			templateUrl: 'template/contact.html',
			controller: 'contactCtrl'	
			
		})
	}])
