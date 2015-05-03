'use strict';

var user = angular.module('myApp.user',['myApp','ngRoute','ngResource']);

user.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/users/', {
        templateUrl: 'users/users.html',
        controller: 'UserListCtrl'
    })
    .when('/user/:id', {
        templateUrl: 'users/new.html',
        controller: 'UserListCtr'
    })
    .when('/user/new',{
        templateUrl: 'users/new.html',
        controller: 'NewUserCtrl'
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
  
user.controller('NewUserCtrl',['$scope', 'User', '$location',
    function($scope, User, $location){
        $scope.contact = new Contact({
            firstName: ['', 'text'],
            lastName: ['', 'text'],
            email: ['', 'email'],
            phone: ['','tel'],
            birthday: ['', 'date'],
            address: ['', 'text']
        });
        $scope.save = function(){
          if($scope.newUser.$invalid){
              $scope.$broadcast('record:invalid');
              $scope.contact.$save();
              $location.url('/users');
          }else{
              
          }
        };
    
    }
]);