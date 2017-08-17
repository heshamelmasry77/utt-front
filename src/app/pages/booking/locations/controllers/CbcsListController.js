/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.locations')
        .controller('CbcsListController', CbcsListController);

    /** @ngInject */

    function CbcsListController($uibModal, $stateParams) {

        var vm = this;
        vm.myCbcsList = {};
        vm.selectedCbcs = {};
        // PAGE MAX SIZE
        vm.smartTablePageSize = 10;
        vm.init = init;
        vm.submitCheckedCbcs = submitCheckedCbcs;


        function init() {
            //get data here from server

            if ($stateParams.itemId) {
                vm.myCbcsList = [
                    {
                        id: "2343d22",
                        name: "gardens cbc",
                        boundaries: "capetown",
                        region: "western cape",
                        type: "cbc",
                        address: "34 bookap bla bla ",
                        cbcGuardDistance: "324",
                        cbcSupportDistance: "32323"
                    },
                    {
                        id: "3244dd",
                        name: "loop street cbc",
                        boundaries: "durban",
                        region: "western cape",
                        type: "cbc",
                        address: "333 bla bla ",
                        cbcGuardDistance: "321324",
                        cbcSupportDistance: "32323"
                    }

                ];
                // Make an api call with itemid to get all the cbcs list
                console.log("Hello i am  " + $stateParams.itemId);
            }
        }

        function submitCheckedCbcs() {
            console.log(vm.selectedCbcs);
        }


    }

})();
