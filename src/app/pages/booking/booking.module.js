/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking', ['BlurAdmin.pages.booking.locations', 'BlurAdmin.pages.booking.bookings', 'BlurAdmin.pages.booking.inspections'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, baSidebarServiceProvider) {
        $stateProvider
            .state('booking', {
                url: '/booking',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Booking',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0
                }
            });

    }


})();
