angular
	.module('app')
	.controller('homeCtrl', ['$scope', function($scope) {
		$scope.title ="Home";
		$scope.friends = friends;
		$scope.items = ['home', 'about', 'contact'];
		$scope.selectedValue = 'home';
	}]);