'use strict';

var attendance = angular.module('myApp.attendance', ['ngRoute']);

attendance.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/attendance', {
        templateUrl: 'attendance/attendance.html',
        controller: 'AttendanceCtrl'
    }).
    when('/attendance/:month/:year', {
        templateUrl: 'attendance/attendance.html',
        controller: 'AttendanceNewCtrl'
    });
}]);

attendance.controller('AttendanceCtrl', function($scope) {
    $scope.month=4;
    $scope.year=2015;
    $scope.days = getDaysInMonth($scope.month,$scope.year);
});
        
attendance.controller('AttendanceNewCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.month = $routeParams.month;
    $scope.year = $routeParams.year;
    $scope.days = getDaysInMonth($scope.month-1,$scope.year);
  }]
);