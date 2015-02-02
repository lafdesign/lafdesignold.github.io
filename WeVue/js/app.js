angular
	.module('app',[
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home',
				controller: 'HomeController',
				resolve: {
					events: ['$http', function($http) {
						return $http.get('http://wevue.com/api/v1/events.json').then(function(response) {
							return response.data;
						})
					}]
				}
			})
			.state('gallery', {
				url: '/gallery',
				templateUrl: 'templates/gallery',
				controller: 'GalleryController'
		})
	}])