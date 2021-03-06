'use strict';

var attendance = angular.module('myApp.attendance', ['ngRoute','ngResource']);

attendance.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/attendance/:month/:year', {
        templateUrl: 'attendance/attendance.html',
        controller: 'AttendanceCtrl'
    });
}]);
        
attendance.controller('AttendanceCtrl', ['$scope', '$routeParams','$location',
  function($scope, $routeParams, $location) {
    $scope.month = $routeParams.month;
    $scope.year = $routeParams.year;
    $scope.days = getDaysInMonth($scope.month-1,$scope.year);
    $scope.go = function(month,year){
        $location.path('/attendance/'+month+'/'+year);
    };
    $scope.goBackOneMonth = function(){
        if($scope.month == 1){
            $scope.month=12;
            $scope.year--;
        }else{
            $scope.month--;
        }
        $location.path('/attendance/'+$scope.month+'/'+$scope.year);
    };
    $scope.goForwardOneMonth = function(){
        if($scope.month == 12){
            $scope.month=1;
            $scope.year++;
        }else{
            $scope.month++;
        }
        $location.path('/attendance/'+$scope.month+'/'+$scope.year);
    };
  }]
);
