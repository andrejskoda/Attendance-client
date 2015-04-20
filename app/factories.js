angular.module('myApp', ['ngResource'])
        .factory('User', ['$resource', function ($resource){
           return $resource('/users/users.json', {},{
               query: {method:'GET', params:{userId:'users'}, isArray:true}
            });
        }]);