'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
            $scope.days = [
                {name: 'Ne', date: '01.02.'},
                {name: 'Po', date: '02.02.'},
                {name: 'Ut', date: '03.02.'},
                {name: 'St', date: '04.02.'},
                {name: 'Št', date: '05.02.'},
                {name: 'Pi', date: '06.02.'},
                {name: 'So', date: '07.02.'}];
        });