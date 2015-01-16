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
			resolve: {
				friends: ['$http', function($http) {
					return $http.get('/api/friends.json').then(function(response) {
					return responce.data;
					})
				}]
			}
		})
			.state('about',{
			url: '/about',
			templateUrl: 'template/about.html',	
			controller:'aboutCtrl'
		})
			.state('contact',{
			url: '/contact',
			templateUrl: 'template/contact.html'	
		})
	}])
