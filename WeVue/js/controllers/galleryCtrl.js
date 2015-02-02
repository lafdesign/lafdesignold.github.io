angular
	.module('app')
	.controller('GalleryCtrl', ['$scope', function($scope) {
		$scope.title = "Gallery";
		$scope.items = ['home','gallery','contact'];
	}]);