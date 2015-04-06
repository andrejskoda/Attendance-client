
var app = angular.module('myApp.directives', []);

var TIME_REGEXP = /(\b[01]\d|2[0-3]):([0-5]\d\b)/;
app.directive('time', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.time = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        if (TIME_REGEXP.test(viewValue)) {
            console.log('is valid.');
          return true;
        }
        console.log('not valid.');
        // it is invalid
        return false;
      };
    }
  };
});
