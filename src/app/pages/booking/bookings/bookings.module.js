/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.bookings', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('booking.bookings', {
                url: '/bookings',
                title: 'Bookings',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('booking.bookings.list', {
                url: '/',
                title: 'List',
                templateUrl: 'app/pages/booking/bookings/views/bookings-list.html',
                controller: 'BookingsListController',
                controllerAs: 'bookingsList',
                sidebarMeta: {
                    order: 0
                }
            })
            .state('booking.bookings.form', {
                url: '/form/:itemId',
                title: 'Bookings form',
                templateUrl: 'app/pages/booking/bookings/views/booking-form.html',
                controller: 'BookingsFormController',
                controllerAs: 'bookingsForm'

            })
            .state('booking.bookings.details', {
                url: '/details/:itemId',
                title: 'Bookings Details',
                templateUrl: 'app/pages/booking/bookings/views/booking-details.html',
                controller: 'BookingDetailsController',
                controllerAs: 'bookingDetails'

            });
    }

})();
