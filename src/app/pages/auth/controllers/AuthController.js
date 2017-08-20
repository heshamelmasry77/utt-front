/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth')
        .controller('AuthController', AuthController);

    /** @ngInject */
    function AuthController() {

        var vm = this;
        vm.init = init;
        vm.constructor = constructor;
        vm.login = login;
        vm.register = register;

        function constructor($auth, $state) {
            vm.$auth = $auth;
            vm.$state = $state;
        }

        function init() {
        }


        function register() {
            console.log(vm.user);
            vm.$auth.signup(vm.user).then(function (token) {
                vm.$auth.setToken(token);
                console.log(vm.user);
            });
        }

        function login() {
            console.log(vm.login.user);
            vm.$auth.login(this.login.user).then(function (result) {
                vm.$auth.setToken(result.data.token);
                // vm.user = JSON.stringify(result.data.email);
                vm.user = result.data.email;
                localStorage.setItem('user', vm.user);
                vm.user = result.data.email;
                vm.$state.go('home', {});
                // console.log(vm.userEmail);
            });
        }

    }
})();





