/* global AmCharts:false */

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',
'UttConfig',
            'BlurAdmin.pages.ui',
            'BlurAdmin.pages.home',
            'BlurAdmin.pages.auth'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }



})();
