/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation', ['BlurAdmin.pages.evaluation.quotes', 'BlurAdmin.pages.evaluation.pricing'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, baSidebarServiceProvider) {
        $stateProvider
            .state('evaluation', {
                url: '/evaluation',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'Evaluation',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 0
                }
            });
    }


})();
