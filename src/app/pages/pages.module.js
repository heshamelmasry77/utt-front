/* global AmCharts:false */

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',
<<<<<<< HEAD
            'UttConfig',
            'Utt.pages.home',
            'Utt.pages.auth',
            'Utt.pages.ui'
=======
'UttConfig',
            'BlurAdmin.pages.dashboard',
            'BlurAdmin.pages.ui',
>>>>>>> parent of 6e99e15... Changing naming to Utt
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
