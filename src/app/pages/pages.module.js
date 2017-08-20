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
            'BlurAdmin.pages.home',
            'BlurAdmin.pages.auth',
            'BlurAdmin.pages.ui'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider,$stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404?isWidget&affiliateId',
                templateUrl: 'app/shared/views/404.html',
            });
        $urlRouterProvider.otherwise('/');


    }
})();
