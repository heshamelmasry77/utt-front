/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration', ['BlurAdmin.pages.administration.users', 'BlurAdmin.pages.administration.transunion'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, baSidebarServiceProvider) {
        $stateProvider
            .state('administration', {
                url: '/administration',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Administration',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 0
                }
            });

    }


})();
