/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('Utt.pages.home', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/dashboard/views/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            });
    }


})();
