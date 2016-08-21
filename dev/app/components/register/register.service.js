angular.module('rubyTracker').service('RegisterService', ['$http', '$q', function($http, $q) {

    var deferred = $q.defer();
    this.register = function (params) {
        $http({
            method: 'POST',
            url: "http://futureprotech-testingurl.rhcloud.com/api/v1/registeruser",
            data: $.param(params),
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('globals')
            }
        }).then(function(response) {
            deferred.resolve(response);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    } 

    /**
     * Get reference data for registration form
     */
    this.getReferenceData = function () {
        var token = 'Bearer ' + localStorage.getItem('globals');
        console.log(token);
        // $http.get("http://futureprotech-testingurl.rhcloud.com/api/v1/getreference", {
        //     headers: { 
        //         'authorization': 'Bearer ' + token
        //     }
        // }).then(function(response) {
        //     deferred.resolve(response);
        // }, function(error) {
        //     deferred.reject(error);
        // });
         $http.get("http://futureprotech-testingurl.rhcloud.com/api/v1/getreference", {
            headers: {
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpVXNlciI6MjksInZjVXNlcm5hbWUiOiJzdXJlbmRhciIsImVudGl0eSI6eyJpRW50aXR5IjoyMSwiaVVzZXIiOjI5LCJpVXNlclR5cGUiOjIsInZjTmFtZSI6IkFkbWluIiwiZHRET0IiOm51bGwsInZjQWRkcmVzcyI6Ik5vLiA1MCwgc2VuY29uZCBjcm9zcywgS2FyZ2lsIE5hZ2FyLCB2ZWxyYW1wZXQsIHB1ZHVjaGVycnkuIiwiaVBsYWNlbWVudCI6MSwiaVRpbWVTbG90IjoxLCJpSW5zdGl0dXRlIjozLCJpbnN0aXR1dGUiOnsiaVJlZmVyZW5jZSI6MywidmNUaXRsZSI6ImlIb3JzZSIsInZjRGVzY3JpcHRpb24iOiJpSG9yc2UgU29mdHdhcmUiLCJ2Y0NvZGUiOiJJNDAwMCIsImlSZWZlcm5jZVR5cGUiOjEsImluc3RpdHV0ZV90eXBlIjp7ImlSZWZlcmVuY2VUeXBlIjoxLCJ2Y05hbWUiOiJpbnN0aXR1dGUifX0sInVzZXJ0eXBlIjp7ImlVc2VyVHlwZSI6MiwidmNSb2xlIjoiTWFya2V0aW5nIiwidmNEZXNjcmlwdGlvbiI6Ik1hcmtldGluZyJ9LCJlbWFpbCI6W3siaUVtYWlsSWQiOjI1LCJ2Y0VtYWlsIjoic3VyZW5kYXIyODExODlAZ21haWwuY29tIiwiaUVudGl0eSI6MjF9XSwicGhvbmUiOlt7ImlQaG9uZSI6MzgsInZjUGhvbmVOdW1iZXIiOiI5NzE1MjYxOTM2IiwiaUNyZWF0ZWRCeSI6MjAsImlVcGRhdGVkQnkiOjIwLCJiU3RhdHVzIjp0cnVlLCJpRW50aXR5IjoyMSwiaVBob25lVHlwZSI6MX1dLCJjb3Vyc2VfbGlzdCI6W3siaUVudGl0eUNvdXJzZSI6MjcsImlDb3VzZUlkIjo1LCJpRW50aXR5IjoyMSwiY291cnNlIjp7ImlSZWZlcmVuY2UiOjUsInZjVGl0bGUiOiJDIiwidmNEZXNjcmlwdGlvbiI6IkMgUHJvZ3JhbWluZyIsInZjQ29kZSI6IkM1MDAxIiwiaVJlZmVybmNlVHlwZSI6MiwiY291cnNlX3R5cGUiOnsiaVJlZmVyZW5jZVR5cGUiOjIsInZjTmFtZSI6ImNvdXJzZSJ9fX0seyJpRW50aXR5Q291cnNlIjoyOCwiaUNvdXNlSWQiOjYsImlFbnRpdHkiOjIxLCJjb3Vyc2UiOnsiaVJlZmVyZW5jZSI6NiwidmNUaXRsZSI6IkMrKyIsInZjRGVzY3JpcHRpb24iOiJDKysgUHJvZ3JhbWluZyIsInZjQ29kZSI6IkM1MDAyIiwiaVJlZmVybmNlVHlwZSI6MiwiY291cnNlX3R5cGUiOnsiaVJlZmVyZW5jZVR5cGUiOjIsInZjTmFtZSI6ImNvdXJzZSJ9fX1dfSwiaWF0IjoxNDcxNzkwOTMzfQ.i9lpC2M528SjS4LmExcCGXt6ugoc7ZUeIUXdksiGtVY"
            },
        }).then(function (response) {
            deferred.resolve(response);
        }, function (err) {
            deferred.reject(err);
        });

        return deferred.promise;
    }
}])