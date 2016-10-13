var mainCtrl = angular.module("mainCtrl", ['requestService']);

mainCtrl.controller('mainController', mainController);

function mainController (Request) {
    var vm = this;

    Request.get("sales-api/group?groupid=category")
        .then(function (response) {
            console.log(response.data);
            vm.createNewMenuItems(response.data);
        })
        .catch(function (err) {
            console.log(err);
        });

    vm.createNewMenuItems = function (data) {
        var salesMenuUL = angular.element(document.getElementById('sales-menu-dropdown-ul'));
        data.forEach( function (object) {
            var newElement = document.createElement("li");
            newElement.innerHTML = "<a href='sales/" + object._id + "'>" + object._id + "</a>";
            salesMenuUL.append(newElement)
        });
    }

}
