/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.users')
        .controller('UsersFormController', UsersFormController);

    /** @ngInject */

    function UsersFormController($stateParams) {

        var vm = this;
        vm.user = {};
        vm.init = init;
        vm.submitUser = submitUser;
        vm.roles = ["Developer", "Designer", "Manager"];

        // MY OBJECT

        function init() {
            if ($stateParams.itemId) {
                // Make an api call with the user item id and get the data of the user
                console.log("Hello i am the user id coming from edit user  " + $stateParams.itemId);
            }
        }

        function submitUser() {

            console.log(vm.user);
            if (vm.user.email && vm.user.firstName && vm.user.lastName && vm.user.role) {
                // To do make an API call
            }
        }


    }

})();
