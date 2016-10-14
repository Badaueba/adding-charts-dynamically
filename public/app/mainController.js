var mainCtrl = angular.module("mainCtrl", ['requestService']);

mainCtrl.controller('mainController', mainController);

function mainController (Request) {
    var vm = this;

    vm.categories = [];
    Request.get("sales-api/group?groupid=category")
        .then(function (response) {
            console.log(response.data);
            vm.categories = response.data;
        })
        .catch(function (err) {
            console.log(err);
        });
}
