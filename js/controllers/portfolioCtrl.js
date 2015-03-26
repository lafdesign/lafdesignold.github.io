angular
  .module('app')
  .controller('portfolioCtrl', ['$scope', function($scope) {
    $scope.title = "Portfolio";
    $scope.items = ['home','about','contact','portfolio', 'resume'];
    $scope.selectedValue = 'portfolio';

  
  }]);