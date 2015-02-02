angular
	.module('app')
	.controller('galleryCtrl', ['$scope', function($scope) {
		$scope.title ="Gallery";
		$scope.items = ['thing1', 'thing2', 'thing3'];
		$scope.projects = ['#1','#2','#3'];
	}]);