angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
    $scope.items = ['home','about','contact','portfolio', 'resume', 'svg'];
    $scope.selectedValue = 'contact';

  
  }]);