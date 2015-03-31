angular
  .module('app')
  .controller('reviewsCtrl', ['$scope', function($scope) {
  	$scope.title = "Reviews";
    $scope.items = ['home','reviews','required','about'];
    $scope.selectedValue = 'reviews';
  }]);