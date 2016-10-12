var mainCtrl = angular.module("mainCtrl", ['requestService']);

mainCtrl.controller('mainController', mainController);

function mainController (Request) {
    var vm = this;

    Request.get("charts-api/")
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        })
}
