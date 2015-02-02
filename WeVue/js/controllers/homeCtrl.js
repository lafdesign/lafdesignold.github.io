angular
	.module('app')
	.controller('HomeCtrl', ['$scope', 'events', function($scope, friends) {
		$scope.title = "WeVue";
		$scope.events = events;
		$scope.items = ['home','gallery','contact'];
	}]);