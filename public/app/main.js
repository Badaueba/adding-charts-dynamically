var main = angular.module("dynamicCharts",
['ngRoute','mainCtrl', 'chartsCtrl', 'salesCtrl']);

main.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/home/home.html'
        })
        .when('/sales/:category', {
            templateUrl : 'app/sales/sales.html',
            controller : 'salesController',
            controllerAs : 'sales'
        })
        .when('/sales-create-edit', {
            templateUrl : 'app/sales/sales-create-edit.html',
            controller : 'salesController',
            controllerAs : 'sales'
        })
        .otherwise({
            redirecTo : '/'
        });
    $locationProvider.html5Mode(true);
});
