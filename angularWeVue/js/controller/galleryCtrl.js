angular
	.module('app')
	.controller('galleryCtrl',function($scope, $http){
			$http.get('http://wevue.com/api/v1/events/335641975/media.json').success(function(data){
				$scope.signatures= data;
			});
		});

	.directive('cycle', function() {
    return {
        restrict: 'A',
        priority: 1001,
        link: function(scope, element, attrs) {
           setTimeout(function(){
               $(element).cycle({
                   fx: 'fade',
                   timeout: 10
               });
           }, 0);
        }
    };
});