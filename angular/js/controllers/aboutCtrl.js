angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "Contact";
    $scope.items = ['home','about','contact'];
    $scope.selectedValue = 'contact';
  }]);