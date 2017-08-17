/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.transunion', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('administration.transunion', {
                url: '/transunion',
                title: 'Transunion',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('administration.transunion.list', {
                url: '/',
                title: 'TU List',
                templateUrl: 'app/pages/administration/transunion/views/transunion-list.html',
                controller: 'TransunionListController',
                controllerAs: 'TransunionList',
                sidebarMeta: {
                    order: 250
                }
            })
            .state('administration.transunion.history', {
                url: '/history',
                title: 'History',
                templateUrl: 'app/pages/administration/transunion/views/history.html',
                controller: 'TransunionHistoryController',
                controllerAs: 'TransunionHistory',
                sidebarMeta: {
                    order: 250
                }

            })
            .state('administration.transunion.import', {
                url: '/import',
                title: 'Import Transunion',
                templateUrl: 'app/pages/administration/transunion/views/import-transunion.html',
                controller: 'TransunionImportController',
                controllerAs: 'TransunionImport'

            });
    }

})();
