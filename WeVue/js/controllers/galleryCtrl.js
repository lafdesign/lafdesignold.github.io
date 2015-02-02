angular
	.module('app')
	.controller('GalleryController', ['$scope', function($scope) {
		$scope.title = "Gallery";
		$scope.items = ['home','gallery','contact'];
	}]);