var requestService = angular.module('requestService', []);
requestService.factory('Request', Request);
function Request ($http) {
    var base = "http://localhost:8000/"
    var requestFactory = {};
    requestFactory.get = function (endPoint) {
        return $http.get(base + endPoint);
    };
    requestFactory.post = function (endPoint, data) {
        return $http.post(base + endPoint, data);
    };
    requestFactory.put = function (endPoint) {
        return $http.put(base + endPoint);
    };
    requestFactory.delete = function (endPoint) {
        return $http.delete(base + endPoint)
    };
    return requestFactory;
}
