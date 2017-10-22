// angular.module('app')
// .directive('socialDirective', function() {
//
//   return {
//     restrict: 'E',
//     templateUrl: '../../views/directives/socialDirective.html',
//
//     // controller: function($scope, $rootScope) {
//     //   if ($rootScope.loggedUser) {
//     //     // $scope.user = $rootScope.loggedUser[0];
//     //     // isLoggedIn = true;
//     //     $scope.user = $rootScope.loggedUser[0];
//     //   }
//
//
//       // $rootScope.refreshHeader = function() {
//       //   setTimeout(function() {
//       //     $scope.$apply($scope.getCart());
//       //   }, 100);
//       // };
//
//     }
//   }
// })

angular.module('app').directive('socialDirective', function() {
  return {
    restrict: 'E',
    templateUrl: '../views/directives/socialDirective.html'
  }
});
