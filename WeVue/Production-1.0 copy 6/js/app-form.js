function FormCtrl($scope, $http){

	$http.get('formInfo').success(function(formInfo){
		$scope.formInfo = formInfo;

	});

	$scope.addNew = function(){
		var formInfo = {
			text: $scope.Name
		}

	}
}
