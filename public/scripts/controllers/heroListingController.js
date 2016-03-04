myApp.controller('HeroListingController', ['$scope', '$http', function($scope, $http)

    getData();

    function getData() {
    $http.get('/hero').then(function(response) {
        $scope.superHeros = response.data;

    });
}




}]);