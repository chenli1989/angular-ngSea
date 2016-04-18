/**
 * Created by dyChen on 2015/12/16.
 */
//脚本文件
this.define(function (require, exports, module) {
    angular.module('user', ['app']).controller('userController', function ($scope, $timeout) {
        $scope.userData = 'user.html';
    });
});