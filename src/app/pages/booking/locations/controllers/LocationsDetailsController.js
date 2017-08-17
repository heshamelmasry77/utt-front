/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.locations')
        .controller('LocationsDetailsController', LocationsDetailsController);

    /** @ngInject */

    function LocationsDetailsController($stateParams, $uibModal) {

        var vm = this;
        vm.myLocationDetails = {};
        // PAGE MAX SIZE
        vm.whichItem = $stateParams.itemId;

        vm.init = init;
        vm.deleteCbc = deleteCbc;
        vm.getCbcSchedule = getCbcSchedule;
        vm.options = {
            showWeeks: false
        };

        function init() {
            if (vm.whichItem === '2342fdss') {
                //todo get data here from server by id
                //todo get busy and free slots from our application
                //cbc
                vm.myLocationDetails =
                    {
                        id: "2342fdss",
                        name: "loop street cbc",
                        boundaries: "durban",
                        region: "western cape",
                        type: "cbc",
                        address: "333 bla bla ",
                        cbcGuardDistance: "324",
                        cbcSupportDistance: "32323",
                        schedule: [
                            {
                                time: '9:00',
                                free: '1',
                                busy: '3',
                                totalTimeSlots: '4'
                            },
                            {
                                time: '10:00',
                                free: '2',
                                busy: '2',
                                totalTimeSlots: '4'
                            }
                            ,
                            {
                                time: '11:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '12:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '01:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '02:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '03:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '04:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            },
                            {
                                time: '05:00',
                                free: '4',
                                busy: '4',
                                totalTimeSlots: '8'
                            }
                        ]
                    };


            }
            //visiting area
            else if (vm.whichItem === 'sdfsdfe334') {

                vm.myLocationDetails =
                    {
                        id: "sdfsdfe334",
                        name: 'gardens VA',
                        boundaries: "capetown",
                        type: 'visiting area',
                        region: 'western cape',
                        cbcsList: [
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
                                cbcGuardDistance: "324",
                                cbcSupportDistance: "32323"
                            }
                        ]
                    };
            }
        }


        function deleteCbc() {
            $uibModal.open({
                templateUrl: 'app/pages/shared/modals/warningModal.html',
                backdrop: 'static',
                controller: function ($uibModalInstance) {
                    this.okAction = function () {

                        console.log("Do action");
                        $uibModalInstance.close();
                    };

                    this.cancelAction = function () {
                        console.log("Don't do action");

                        $uibModalInstance.close();
                    };
                },
                controllerAs: 'modalActions'
            });

        }

        function getCbcSchedule() {

            //todo get cbc schedule data from server
            console.log(vm.myLocationDetails.scheduleDate);


        }

    }

})();
