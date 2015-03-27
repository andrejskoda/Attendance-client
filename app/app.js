'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.attendance',
  'myApp.view2',
  'myApp.version',
  'customFilters'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/attendance'});
}]);


/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
function getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    var calendarDate = new Date(year, month, 1);
    var days = [];
    console.log('month', month, 'date.getMonth()', calendarDate.getMonth());
    while (calendarDate.getMonth() === month) {
        var day = {};
        day.date = new Date(calendarDate);
        day.isWeekend = calendarDate.getDay() === 0 || calendarDate.getDay() === 6;
        day.from='09:00';
        day.to='17:00';
        day.workTime= function(stringFrom, stringTo){
            var toUTCDate = function (date) {
                var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
                return _utc;
            };

            
            var from = new Date(calendarDate);
            from.setHours(stringFrom.split(':')[0]);
            from.setMinutes(stringFrom.split(':')[1]);
            
            var to = new Date(calendarDate);
            to.setHours(stringTo.split(':')[0]);
            to.setMinutes(stringTo.split(':')[1]);
            
            var elapsed= to.getTime() - from.getTime();
            var localDate =  new Date(elapsed);
            return toUTCDate(localDate);
        }
        days.push(day);
        
        calendarDate.setDate(calendarDate.getDate() + 1);
    }
    return days;
}
