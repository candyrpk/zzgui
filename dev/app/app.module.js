var rubyTracker = angular.module('rubyTracker', ["ngCookies", "ui.router"])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // var authenticated = ['$q', 'AuthFactory', function ($q, AuthFactory) {
    //     var deferred = $q.defer();
    //     AuthFactory.isLoggedIn()
    //         .then(function (isLoggedIn) {
    //             if (isLoggedIn) {
    //                 deferred.resolve();
    //             } else {
    //                 deferred.reject('Not logged in');
    //             }
    //         });
    //     return deferred.promise;
    // }];
  
//   For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  
//   Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/components/login/login.page.html",
      controller: 'LoginController',
      pageTitle: 'Login'
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "app/components/mainContent/main.page.html",
      controller: 'InitController'
    })
    .state('app.dashboard', {
      url: "/dashboard",
      templateUrl: "app/components/dashboard/dashboard.page.html",
      controller: 'DashboardController',
      pageTitle: 'Dashboard'
    })
    .state('app.register', {
      url: "/register",
      templateUrl: "app/components/register/register.page.html",
      controller: 'RegisterController',
      pageTitle: 'Register'
    });
}]).run(['$rootScope', '$http', '$state', '$stateParams', '$location', '$cookies', function ($rootScope, $http, $state, $stateParams, $location, $cookies) {
    //$rootScope.pageTitle = $state.current.pageTitle;
    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            $rootScope.pageTitle = toState.pageTitle;
            // transitionTo() promise will be rejected with
            // a 'transition prevented' error
            // redirect to login page if not logged in and trying to access a restricted page
            console.log($location.path());
            var restrictedPage = $.inArray(toState.name, ['login']) === -1;
            var loggedIn = localStorage.getItem('globals');
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        })
}]);