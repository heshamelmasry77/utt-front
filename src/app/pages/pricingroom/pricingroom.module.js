/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.pricingroom', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('pricingroom', {
                url: '/pricingroom',
                templateUrl: 'app/pages/pricingroom/views/pricingroom.html',
                title: 'Pricing Room',
                controller: 'PricingroomController',
                controllerAs: 'pricingroom',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0
                }
            });
    }
})();
