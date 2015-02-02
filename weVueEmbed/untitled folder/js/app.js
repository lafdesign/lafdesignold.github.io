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
			resolve:{
				signitures['$http', function($http){
					return $http.get('http://wevue.com/api/v1/events/335641975/media.json').then(function(response) {
						return response.data;
					})
				}]
			}
		})
			.state('menu',{
			url: '/menu',
			templateUrl: 'template/menu.html'	
		})
	}])
