angular.module("dynamicCharts")
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : 'app/home/home.html'
        })
        .state('charts', {
            url : '/charts',
            templateUrl : 'app/charts/charts.html',
            controller : 'chartsController',
            controllerAs : 'charts'
        })
        .state('sales', {
            url : '/sales',
            templateUrl : 'app/sales/sales.html',
            controller : 'salesController',
            controllerAs : 'sales'
        })
        .state('sales_create-edit', {
            url : '/sales/create-edit',
            templateUrl : 'app/sales/sales_create-edit.html',
            controller : 'salesController',
            controllerAs : 'sales'
        })

    $urlRouterProvider.otherwise('/home')
    $locationProvider.html5Mode(true);
});
