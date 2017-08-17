/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.locations', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('booking.locations', {
                url: '/locations',
                title: 'Locations',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('booking.locations.list', {
                url: '/',
                title: 'List',
                templateUrl: 'app/pages/booking/locations/views/locations-list.html',
                controller: 'LocationsListController',
                controllerAs: 'locationsList',
                sidebarMeta: {
                    order: 0
                }

            })
            .state('booking.locations.form', {
                url: '/form/:itemId',
                title: 'Location form',
                templateUrl: 'app/pages/booking/locations/views/location-form.html',
                controller: 'LocationsFormController',
                controllerAs: 'locationsForm'

            })
            .state('booking.locations.details', {
                url: '/details/:itemId',
                title: 'Location details',
                templateUrl: 'app/pages/booking/locations/views/location-details.html',
                controller: 'LocationsDetailsController',
                controllerAs: 'locationsDetails'

            })
            .state('booking.cbcs', {
                url: '/locations/cbcs/:itemId',
                title: 'Cbcs List',
                templateUrl: 'app/pages/booking/locations/views/cbcs-list.html',
                controller: 'CbcsListController',
                controllerAs: 'cbcsList'

            })
            .state('booking.locations.block', {
                url: '/block',
                title: 'Block location',
                templateUrl: 'app/pages/booking/locations/views/block-locations.html',
                controller: 'BlockLocationsController',
                controllerAs: 'blockLocations',
                sidebarMeta: {
                    order: 0
                }
            });
    }

})();
