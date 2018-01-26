app = angular.module('SampleApp');

app.controller('MainController', [
    '$scope',
    function($scope) {
        $scope.products = [];
        $scope.addItem = function () {
            $scope.products.push($scope.addMe);
        };
        $scope.removeItem = function (x) {
            $scope.products.splice(x, 1);
        };
}]);
