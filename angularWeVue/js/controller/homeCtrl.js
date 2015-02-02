angular
	.module('app')
	.controller('homeCtrl',function($scope, $http){
			$http.get('http://wevue.com/api/v1/events.json').success(function(data){
			$scope.feeds = data;
			});
		});
