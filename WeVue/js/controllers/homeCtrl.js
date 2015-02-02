angular
	.module('app')
	.controller('HomeController', ['$scope', 'events', function($scope, friends) {
		$scope.title = "WeVue";
		$scope.events = events;
		$scope.items = ['home','gallery','contact'];
	}]);