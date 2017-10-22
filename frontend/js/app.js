angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/frontend/views/home.html',
      controller: 'mainCtrl'
    })
    .state('products', {
      url: '/products',
      templateUrl: '/frontend/views/products.html'
    })
    .state('singleProduct', {
      url: '/products/:id',
      templateUrl: '/frontend/views/single_products.html'
    })
    .state('team', {
      url: '/team',
      templateUrl: '/frontend/views/team.html'
    })
    .state('teamMember', {
      url: '/team/:id',
      templateUrl: '/frontend/views/teamMember.html'
    })
})
