'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.attendance',
  'myApp.overview',
  'myApp.version',
  'customFilters',  
  'myApp.directives'
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
        day.workTime= function(stringFrom, stringTo, lunchFrom, lunchTo){
            var toUTCDate = function (date) {
                var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
                return _utc;
            };
            
            var parseTime = function(text){
                if(text === undefined) return null;
                var array = text.split(':');
                if(array.length === 2){
                    try{
                        var hours = Number(array[0]);
                        var minutes = Number(array[1]);
                        if(hours >=0 && hours <=23 && minutes >=0 && minutes <=59){
                            var d= new Date();
                            d.setHours(text.split(':')[0]);
                            d.setMinutes(text.split(':')[1]);
                            return d;
                        }else{
                            return null;
                        }
                    }catch(err){
                        return null;
                    }
                    
                }
                else{
                    return null;
                }
            };
            
            var from = parseTime(stringFrom);
            var to = parseTime(stringTo);
            
            var lunchFrom = parseTime(lunchFrom);
            var lunchTo = parseTime(lunchTo);

            if(from !== null && to !== null){
                var elapsed= to.getTime() - from.getTime();
                var localDate =  new Date(elapsed);
                
                if(lunchFrom !== null && lunchTo !== null){
                    var lunchElapsed= lunchTo.getTime() - lunchFrom.getTime();
                    var totalLocalDate = new Date(elapsed-lunchElapsed);
                    return toUTCDate(totalLocalDate);
                }
                
                return toUTCDate(localDate);
            }else {
                return null;
            }
        };
        days.push(day);
        
        calendarDate.setDate(calendarDate.getDate() + 1);
    }
    return days;

}