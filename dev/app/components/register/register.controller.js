angular.module('rubyTracker')
.controller('RegisterController', ['$scope', '$state', '$location', 'RegisterService', function ($scope, $state, $location, RegisterService) {

    $scope.user = {
        "vcUsername": "admin",
        "entity": {
            "iUserType": 1,
            "vcName": "Admin",
            "dtDOB": "28/11/1989",
            "vcAddress": "No. 50, sencond cross, Kargil Nagar, velrampet, puducherry.",
            "iPlacement": 1,
            "iTimeSlot": 1,
            "iInstitute": 3,
            "email": [
            "surendar28111989@gmail.com",
            "surendar28ih@gmail.com"
            ],
            "phone": [
            {
                "iPhoneType": 1,
                "vcPhoneNumber": "9715261938"
            },
            {
                "iPhoneType": 2,
                "vcPhoneNumber": "9715261931"
            }
            ],
            "course": [
            5,
            6
            ]
        }
    };

    $scope.register = function (params) {
        RegisterService.register(params, function (response) {
            if (response.success) {
                console.log(response);
            } else {
                console.log("error in login");
            }
        });
    }

    var getReferenceData = function () {
        RegisterService.getReferenceData().then( function (res) {
            console.log(res);

        }, function (error) {
            console.log(error);
        })
    }

    function init(params) {
        getReferenceData();
    }
    init();
}]);