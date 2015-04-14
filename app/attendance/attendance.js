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
        
attendance.controller('AttendanceNewCtrl', ['$scope', '$routeParams','$location',
  function($scope, $routeParams, $location) {
    $scope.month = $routeParams.month;
    $scope.year = $routeParams.year;
    $scope.days = getDaysInMonth($scope.month-1,$scope.year);
    $scope.go = function(month,year){
        console.log('method go called')
        $location.path('/attendance/'+month+'/'+year);
    };
  }]
);