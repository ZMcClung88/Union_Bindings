angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'mainCtrl'
    })
    .state('products', {
      url: '/products',
      templateUrl: '/views/products.html'
    })
    .state('singleProduct', {
      url: '/products/:id',
      templateUrl: '/views/single_products.html'
    })
    .state('team', {
      url: '/team',
      templateUrl: '/views/team.html'
    })
    .state('teamMember', {
      url: '/team/:id',
      templateUrl: '/views/teamMember.html'
    })
})
