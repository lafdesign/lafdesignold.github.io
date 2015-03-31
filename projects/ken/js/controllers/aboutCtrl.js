angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "About";
    $scope.items = ['home','reviews','required','about'];
    $scope.selectedValue = 'about';
  }]);