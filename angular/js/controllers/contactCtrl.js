angular
  .module('app')
  .controller('contactCtrl', ['$scope',  function($scope) {
    $scope.title = "Contact";
    $scope.items = ['home','about','contact'];
    $scope.selectedValue = 'contact';
    
    
  }]);