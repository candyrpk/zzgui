angular.module('rubyTracker').controller('LoginController', ['$scope', '$state', '$location', 'AuthFactory', function ($scope, $state, $location, AuthFactory) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    console.log('login');
    $scope.authentication = function (params) {
        AuthFactory.Login(params, function (response) {
            if (response.success) {
                AuthFactory.SetCredentials(params.username, params.password, response.data);
                $state.go('app.register');
            } else {
                console.log("error in login");
            }
        });
    }

}]);