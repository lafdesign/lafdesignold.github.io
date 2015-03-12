angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "About";
    $scope.items = ['home','about','contact','portfolio'];
    $scope.selectedValue = 'about';
  }]);