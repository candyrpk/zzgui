angular.module('rubyTracker')
.controller('InitController', ['$scope', '$state', '$location', 'AuthFactory', function ($scope, $state, $location, AuthFactory) {
    $scope.logout =function () {
        AuthFactory.ClearCredentials();
        $state.go('login');   
    }
}]);