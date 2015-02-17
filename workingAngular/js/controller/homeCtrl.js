angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'signitures', function($scope, signitures) {
		$scope.title = "gallery";
		$scope.signitures = signitures;
		$scope.items = ['home', 'about', 'contact'];
		$scope.selectedValue = 'contact';
	}]);