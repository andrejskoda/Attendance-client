'use strict';

angular.module('customFilters', []).filter('dayOfWeek', function () {
    return function (input) {
        if      (input === 0) return 'Ne';
        else if (input === 1) return 'Po';
        else if (input === 2) return 'Ut';
        else if (input === 3) return 'St';
        else if (input === 4) return 'Št';
        else if (input === 5) return 'Pi';
        else if (input === 6) return 'So';
        else return '??';
    };
});