angular
	.module('app')
	.controller('contactCtrl', ['$scope', function($scope) {
		$scope.title ="contact";
		$scope.items = ['thing1', 'thing2', 'thing3'];
		$scope.projects = ['#1','#2','#3'];
	}]);