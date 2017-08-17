/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.transunion')
        .controller('TransunionImportController', TransunionImportController);

    /** @ngInject */

    function TransunionImportController() {

        var vm = this;
        vm.importTransunionData = {};
        vm.submitTransunionData = submitTransunionData;

        function submitTransunionData() {
            //to do post data here from server
            console.log(vm.importTransunionData);

        }


    }
})();
