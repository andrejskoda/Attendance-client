'use strict';

angular.module('myApp.attendance', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/attendance', {
    templateUrl: 'attendance/attendance.html',
    controller: 'AttendanceCtrl'
  });
}])

.controller('AttendanceCtrl', function($scope) {
            $scope.days = getDaysInMonth(1,2015);
        });
        
