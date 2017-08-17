/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.users', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('administration.users', {
                url: '/users',
                title: 'Users',
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                abstract: true,
                sidebarMeta: {
                    order: 0
                }
            })
            .state('administration.users.list', {
                url: '/',
                title: 'List',
                templateUrl: 'app/pages/administration/users/views/users-list.html',
                controller: 'UsersListController',
                controllerAs: 'usersList',
                sidebarMeta: {
                    order: 250
                }

            })
            .state('administration.users.user-form', {
                url: '/users/form/:itemId',
                templateUrl: 'app/pages/administration/users/views/user-form.html',
                controller: 'UsersFormController',
                controllerAs: 'usersForm'
            })
            .state('administration.users.roles', {
                url: '/roles',
                title: 'Widget',
                templateUrl: 'app/pages/administration/users/views/roles-list.html',
                controller: 'RolesController',
                controllerAs: 'roles',
                sidebarMeta: {
                    order: 250
                }
            });
    }

})();
