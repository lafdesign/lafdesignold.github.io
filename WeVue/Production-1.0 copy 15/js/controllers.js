'use strict';
 
/* Controllers */
 
angular.module('App.controllers', []).
  .controller('Ctrl1', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
      $scope.nameRequired = '';
      $scope.emailRequired = '';
      $scope.companyRequired = '';

	  if (!$scope.formInfo.Name) {
        $scope.nameRequired = 'Name Required';
      }
 
      if (!$scope.formInfo.Email) {
        $scope.emailRequired = 'Email Required';
      }
 
      if (!$scope.formInfo.company) {
        $scope.passwordRequired = 'Field Required';
      }
    };
  }])
  .controller('AppCtrl2', [function() {
 
  }]);