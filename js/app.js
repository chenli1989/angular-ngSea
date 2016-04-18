/**
 * Created by dyChen on 2015/12/16.
 */

define(function (require, exports, module) {
    require('ie7support');
    require('angular-modal-service');
    var app = angular.module('app', ['ngSea', 'ie7support', 'angularModalService'])
        .run(["$rootScope", "$ngSea", function ($rootScope, $ngSea) {
            app = $ngSea(app);
        }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'; //设置ajax请求服务端
        }]);

    module.exports = app;
});
