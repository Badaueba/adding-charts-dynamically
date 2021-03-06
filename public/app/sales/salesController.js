var salesCtrl = angular.module('salesCtrl', ['requestService']);

salesCtrl.controller('salesController', salesController);
function salesController (Request, $routeParams, $scope, $compile) {
    var vm = this;

    vm.salesCategoryList = false;
    vm.salesThemeList = true;
    vm.saleObject = {};
    vm.feedbackRequest = "";
    vm.salesList = [];
    vm.categoryOptions = [];
    vm.themeOptions = [];
    vm.processing = false;
    vm.selectedCategory = "";
    vm.selectedTheme = "";
    vm.infoFormData = [];

    vm.submitSale = function () {
        vm.saleObject.info = {};
        vm.infoFormData.forEach(function (info) {
            vm.saleObject.info[info.name] = info.value;
        });

        console.log(vm.saleObject.info);

        Request.post('sales-api', vm.saleObject)
            .then(function (response) {
                vm.feedbackRequest = response.data.message;
            })
            .catch(function (err){
                console.log(err);
                vm.feedbackRequest = err;
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

    vm.addNewFieldForm = function () {
        vm.infoFormData.push({ name : "", value : ""});
    };
    vm.getCategoryOptions();
    vm.getThemeOptions();
}
