angular
  .module('app')
  .controller('contactCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "Contact";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);