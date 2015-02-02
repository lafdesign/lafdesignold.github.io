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
			.state('gallery',{
			url: '/gallery',
			templateUrl: 'template/gallery.html',	
			controller:'galleryCtrl'
		})
			.state('contact',{
			url: '/contact',
			templateUrl: 'template/contact.html'	
		})
	}])

