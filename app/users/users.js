'use strict';

var user = angular.module('myApp.user',['myApp','ngRoute','ngResource']);

user.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/users/', {
        templateUrl: 'users/users.html',
        controller: 'UserListCtrl'
    });
}]);

user.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.temp = function(){console.log('running')};
    $scope.users = User.query();
  }]);