angular.module('app').controller('productsCtrl', function($scope, mainSrvc) {
  $scope.getProducts = () => {
    mainSrvc.getProducts().then(response => {
      $scope.products = response;
    });
  };
  $scope.getProducts();
});
