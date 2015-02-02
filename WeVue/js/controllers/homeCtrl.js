angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'events', function($scope, friends) {
		$scope.title = "WeVue";
		$scope.events = events;
		$scope.items = ['home','gallery','contact'];
	}]);