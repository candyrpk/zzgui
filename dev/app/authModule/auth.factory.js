// angular.module('rubyTracker').factory('AuthFactory', ['$q', '$rootScope', '$http', '$state',
//     function ($q, $rootScope, $http, $state) {
//         var currentUser = '';
//         var factory = {
//             isLoggedIn: isLoggedIn,
//             getCurrentUser: getUserInfo
//         };

//         var defer = $q.defer();
//         function isLoggedIn() {
//             var user_id = localStorage.getItem('user_id');
//             if (user_id) {
//                 var url = window.domainURL + 'user/' + user_id;
//                 return $http.get(url).success(function (res) {
//                     console.log(res);
//                     currentUser = res;
//                 }).error(function (err) {
//                     $state.go('login');
//                     // if(err.status == 401) {
//                     //     $state.go('login');
//                     // }
//                 });
//             } else {
//                 defer.resolve(false);
//                 $state.go('login');
//                 return defer.promise;
//             }
//         };

//         function getUserInfo() {
//             return currentUser;
//         };
//         return factory;
//     }]);

'use strict';

angular.module('rubyTracker').factory('AuthFactory',
    ['$http', '$cookies', '$rootScope', '$timeout',
        function ($http, $cookies, $rootScope, $timeout) {
            var service = {};
            console.log('factory');
            //$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            service.Login = function (params, callback) {
                /* Use this for real authentication
                 ----------------------------------------------*/
                 $http({
                    method: 'POST',
                    url: "http://futureprotech-testingurl.rhcloud.com/api/v1/loginuser",
                    data: $.param({
                        "username": params.username,
                        "password": params.password
                    }),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (response) {
                        if (response) {
                            response = { success: response.status, data: response.data };
                        } else {
                            response = { success: false, message: 'Username or password is incorrect' };
                        }
                        callback(response);
                    });
            };
            service.SetCredentials = function (username, password, token) {

                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        token: token
                    }
                };
                
                //$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // jshint ignore:line
                //$cookies.put('globals', window.btoa($rootScope.globals));
                localStorage.setItem('globals', token);
            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                //$cookies.remove('globals');
                localStorage.setItem('globals','');
            };

            return service;
        }]);

