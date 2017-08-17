/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation.quotes', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('evaluation.quotes', {
                url: '/quotes',
                title: 'Quotes',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('evaluation.quotes.list', {
                url: '/',
                title: 'List',
                templateUrl: 'app/pages/evaluation/quotes/views/quotes-list.html',
                controller: 'QuotesController',
                controllerAs: 'quotes',
                sidebarMeta: {
                    order: 0
                }

            })
            .state('evaluation.quotes.create', {
                url: '/create',
                title: 'Create quote',
                templateUrl: 'app/pages/evaluation/quotes/views/create-quote.html',
                controller: 'QuotesController',
                controllerAs: 'quotes',
                sidebarMeta: {
                    order: 0
                }
            }).state('evaluation.quotes.export', {
            url: '/export',
            title: 'Export quotes',
            templateUrl: 'app/pages/evaluation/quotes/views/export-quotes.html',
            controller: 'QuotesController',
            controllerAs: 'quotes',
            sidebarMeta: {
                order: 0
            }
        });
    }

})();
