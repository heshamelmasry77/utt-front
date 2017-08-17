/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/pages/dashboard/views/dashboard.html',
                title: 'Dashboard',
                controller: 'DashboardController',
                controllerAs: 'dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0
                }
            });
    }


})();
