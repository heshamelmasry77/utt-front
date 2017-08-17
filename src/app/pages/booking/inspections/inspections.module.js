/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.inspections', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('booking.inspections', {
                url: '/inspections',
                title: 'Inspections-list',
                templateUrl: 'app/pages/booking/bookings/views/bookings-list.html',
                controller: 'InspectionsController',
                controllerAs: 'inspections'
            })

    }

})();
