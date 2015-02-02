angular
	.module('app')
	.controller('galleryCtrl',function($scope, $http){
			$http.get('http://wevue.com/api/v1/events/335641975/media.json').success(function(data){
				$scope.signatures= data;
			});
		});