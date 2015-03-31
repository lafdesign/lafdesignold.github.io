angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['home','reviews','required','about'];
    $scope.selectedValue = 'home';

  
  }]);