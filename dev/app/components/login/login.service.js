angular.module('rubyTracker').service('LoginService', ['$http', '$q', function($http, $q) {

    var deferred = $q.defer();
    this.auth = function (cretentials) {
        $http.post("http://futureprotech-testingurl.rhcloud.com/loginuser",cretentials)
        .then(function(response) {
            deferred.resolve(response);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    } 
}])