angular
	.module('app')
	.controller('contactCtrl', ['$scope', function($scope) {
		$scope.title = "contact";
		$scope.items = ['home', 'about', 'contact'];
		$scope.selectedValue = 'contact';
	}]);