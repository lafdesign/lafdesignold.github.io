angular
	.module('app')
	.controller('galleryCtrl', ['$scope', function($scope) {
		$scope.title = "Gallery";
		$scope.items = ['home','gallery','contact'];
	}]);