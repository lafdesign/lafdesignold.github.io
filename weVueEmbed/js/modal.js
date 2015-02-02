var app = angular.module('plunker', ['ui.bootstrap']);


app.directive('innerHtmlBind', function() {
  return {
    restrict: 'A',
    scope: {
      inner_html: '=innerHtml'
    },
    link: function(scope, element, attrs) {
      scope.inner_html = element.html();
    }
  }
});


var ModalDemoCtrl = function($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function() {

    var modalInstance = $modal.open({
      template: $scope.modal_html_template,
      controller: ModalInstanceCtrl,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
  
};


var ModalInstanceCtrl = function($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function() {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};