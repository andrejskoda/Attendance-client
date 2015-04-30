'use strict';

var user = angular.module('myApp.user',['myApp','ngRoute','ngResource']);

user.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/users/', {
        templateUrl: 'users/users.html',
        controller: 'UserListCtrl'
    });
}]);

user.controller('UserListCtrl', ['$scope', 'User', '$location',
  function($scope, User, $location) {
    $scope.users = User.query();
    $scope.fields = ['firstName', 'lastName'];
    $scope.sort = function(field){
      $scope.sort.field = field;
      $scope.sort.order = !$scope.sort.order;
    };
    $scope.sort.field= 'firstName';
    $scope.sort.order = false;
    $scope.show = function(id){
        $location.url('/user/' + id);
    };
  }]);