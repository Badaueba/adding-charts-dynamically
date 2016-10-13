angular.module("dynamicCharts")
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home', {
            url : '/home',
            templateUrl : 'app/home/home.html'
        })
        .when('/charts', {
            templateUrl : 'app/charts/charts.html',
            controller : 'chartsController',
            controllerAs : 'charts'
        })
        .when('/sales/:category', {
            templateUrl : 'app/sales/sales.html',
            controller : 'salesController',
            controllerAs : 'sales'
        })
        .when('/sales-create-edit', {
            templateUrl : 'app/sales/sales_create-edit.html',
            controller : 'salesController',
            controllerAs : 'sales'
        });

    $routeProvider.otherwise({ redirecTo : '/home'})
    $locationProvider.html5Mode(true);
});
