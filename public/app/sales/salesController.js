var salesCtrl = angular.module('salesCtrl', []);

salesCtrl.controller('salesController', salesController);
function salesController () {
    var vm = this;

    vm.salesCategoryList = false;
    vm.salesThemeList = true;
    vm.saleObject = {};

    vm.submitSale = function () {
        console.log(vm.saleObject);
    };
    vm.checkCategoryList = function (check) {
        vm.salesCategoryList = check;
    };
    vm.checkThemeList = function (check) {
        vm.salesThemeList = check;
    };
}
