angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
    $scope.items = ['home','about','contact','portfolio'];
    $scope.selectedValue = 'contact';

  
  }]);