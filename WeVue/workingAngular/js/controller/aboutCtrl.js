angular
	.module('app')
	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title ="About";
		$scope.items = ['thing1', 'thing2', 'thing3'];
		$scope.projects = ['#1','#2','#3'];
	}]);