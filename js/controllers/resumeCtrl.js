angular
  .module('app')
  .controller('resumeCtrl', ['$scope', function($scope) {
  	$scope.title = "Resume";
    $scope.items = ['home','about','contact','portfolio', 'resume'];
    $scope.selectedValue = 'resume';
  }]);