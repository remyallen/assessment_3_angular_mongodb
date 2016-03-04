var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/hero_entry', {
            templateUrl: '/views/templates/hero_entry.html',
            controller: 'HeroEntryController'
        })
        .when('/super_power', {
            templateUrl: '/views/templates/hero_listing.html',
            controller: 'HeroListingController'
        })

        .otherwise({
            redirectTo: 'hero_entry'
        });


}]);