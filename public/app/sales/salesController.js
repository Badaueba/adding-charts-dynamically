var salesCtrl = angular.module('salesCtrl', ['requestService']);

salesCtrl.controller('salesController', salesController);
function salesController (Request, $routeParams, $scope) {
    var vm = this;

    vm.salesCategoryList = false;
    vm.salesThemeList = true;
    vm.saleObject = {};
    vm.feedbackRequest = "";
    vm.salesList = [];
    vm.categoryOptions = [];
    vm.themeOptions = [];
    vm.processing = false;
    vm.selectedCategory = "asd";

    console.log(vm.selectedCategory);
    
    vm.submitSale = function () {
        console.log(vm.saleObject);

        console.log(vm.selectedCategory);

        Request.post('sales-api', vm.saleObject)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (err){
                console.log(err);
            });
    };
    vm.getSales = function () {
        vm.processing = true;
        Request.get('sales-api?category=' + $routeParams.category)
            .then(function (response) {
                vm.salesList = response.data;
                vm.processing = false;
            })
            .catch(function (err) {
                console.log(err);
                vm.processing = false;
            });
    }();

    vm.getCategoryOptions = function () {
        Request.get('sales-api/group?groupid=category')
            .then(function (response){
                vm.categoryOptions = response.data;
            });
    };
    vm.getThemeOptions = function () {
        Request.get('sales-api/group?groupid=theme')
            .then(function (response){
                vm.themeOptions = response.data;
            });
    };

    vm.checkCategoryList = function (check) {
        vm.salesCategoryList = check;
    };
    vm.checkThemeList = function (check) {
        vm.salesThemeList = check;
    };

    vm.getCategoryOptions();
    vm.getThemeOptions();
}
