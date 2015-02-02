angular
	.module('app')
	.controller('galleryCtrl', function ($scope, $http){
			$http.get('http://wevue.com/api/v1/events/335641975/media.json').success(function(data){
				$scope.signatures= data;
			});
		})

	.directive('mySlideshow', function () {
	return {
	   restrict: 'AC',
      link: function (scope, element, attrs) {
		var config = angular.extend({
          slides: '.slide'
        }, scope.$eval(attrs.mySlideshow)); 
        setTimeout(function () {
         element.cycle(config);
        }, 0);
	  }
	};
});