var salesCtrl = angular.module('salesCtrl', ['requestService']);

salesCtrl.controller('salesController', salesController);
function salesController (Request) {
    var vm = this;

    vm.salesCategoryList = false;
    vm.salesThemeList = true;
    vm.saleObject = {};
    vm.feedbackRequest = "";

    vm.submitSale = function () {
        Request.post('sales-api/', vm.saleObject)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (err){
                console.log(err);
            });
    };
    vm.getSales = function () {
        Request.get('sales-api/')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    vm.checkCategoryList = function (check) {
        vm.salesCategoryList = check;
    };
    vm.checkThemeList = function (check) {
        vm.salesThemeList = check;
    };
}
