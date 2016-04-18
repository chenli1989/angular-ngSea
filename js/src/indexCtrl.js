/**
 * Created by dyChen on 2015/12/16.
 */
//脚本文件
this.define(function (require, exports, module) {
    angular.module('index', ['app']).controller('indexController', function ($scope, ModalService) {
        $scope.indexData = 'index.html';
        $scope.showCustom = function() {
            ModalService.showModal({
                templateUrl: "custom/custom.html",
                controller: "CustomController"
            }).then(function(modal) {
                modal.close.then(function(result) {
                    $scope.customResult = "All good!";
                    $scope.indexData = ''
                });
            });

        };
    }).controller('CustomController', ['$scope', 'close', function($scope, close) {
        $scope.close = close;
    }]);
});