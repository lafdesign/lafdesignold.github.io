angular
  .module('app')
  .controller('requiredCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
      $scope.items = ['home','reviews','required','about'];
    $scope.selectedValue = 'required';

  
  }]);