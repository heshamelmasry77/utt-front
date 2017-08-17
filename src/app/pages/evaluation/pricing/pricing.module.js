/**
 * @author heshamelmasry
 * created on 27.03.2017
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation.pricing', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('evaluation.pricing', {
                url: '/pricing',
                title: 'Pricing',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('evaluation.pricing.list', {
                url: '/?pricingType&id&fromDate&toDate&status&region&isCover&limit&page&field&dir',
                title: 'List',
                templateUrl: 'app/pages/evaluation/pricing/views/pricing.html',
                controller: 'PricingController',
                controllerAs: 'pricing',
                params: {
                    limit: {
                        value: '10',
                        squash: true
                    },
                    page: {
                        value: '1',
                        squash: true
                    },
                    field: {
                        value: 'id',
                        squash: true
                    },
                    dir: {
                        value: 'asc',
                        squash: true
                    },
                    pricingType: {
                        value: 'offer',
                        squash: true
                    }
                },
                sidebarMeta: {
                    order: 0
                }

            })
            .state('evaluation.pricing.inspection', {
                url: '/inspection/:itemId',
                title: 'Inspection Info',
                templateUrl: 'app/pages/evaluation/pricing/views/inspection-info.html',
                controller: 'InspectionController',
                controllerAs: 'inspection'
            });

    }

})();
