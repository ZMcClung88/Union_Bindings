angular.module('app').service('mainSrvc', function($http) {
  this.name = "zac attack";

  ////// PRODUCTS ///////
  this.getProducts = () => {
    return $http({
      method: 'GET',
      url: 'api/products'
    }).then(response => response.data)
  };
})
