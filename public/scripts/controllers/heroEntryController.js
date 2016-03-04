myApp.controller('HeroEntryController', ['$scope', '$http', function($scope, $http) {
    console.log('Hero Entry Controller');
    $scope.selectedPower = null;
    $scope.superPowers = [];

    $scope.getPower = function(power_name) {
        $http.get('/powers/' + power_name).then(function (response) {
            $scope.superPowers = response.data;

        });
    };

    $scope.postData = function() {
        var post = {
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power
        };

        $http.post('/entry', post).then(function(response) {
            $scope.post = response.data;
            console.log(response.data);
                $scope.alias = '';
                $scope.first_name = '';
                $scope.last_name = '';
                $scope.city = '';
                $scope.primary_power = '';
        });
    };






}]);