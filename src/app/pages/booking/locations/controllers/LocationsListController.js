/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.locations')
        .controller('LocationsListController', LocationsListController);

    /** @ngInject */

    function LocationsListController($uibModal) {

        var vm = this;
        // MY OBJECT
        vm.smartTableData = [
            {
                id: "sdfsdfe334",
                name: 'gardens VA',
                boundaries: "capetown",
                type: 'visiting area',
                region: 'western cape',
                cbcsList: [1, 2, 3, 4]
            },
            {
                id: "fsdf342",
                name: "cape town city center EA",
                boundaries: "capetown",
                region: "western cape",
                type: "exclusion area"


            },
            {
                id: "2342fdss",
                name: "gardens cbc",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "fsdfsd43",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "sdfs34234",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "66565ggg",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "234fsdf",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "gdg5454",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "gdfgdfg3",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "gdfgd443",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "gdfg43",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "dgd43534",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "43534gdsgs",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "343dfsf",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc",
                cbcGuardDistance: "324",
                cbcSupportDistance: "32323"


            }
            ,
            {
                id: "sdfsdf43",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }
            ,
            {
                id: "gdfg434",
                name: "gardens cbc",
                boundaries: "capetown",
                region: "western cape",
                type: "cbc"

            }

        ];
        // PAGE MAX SIZE
        vm.smartTablePageSize = 10;
        vm.types = {'visiting_area': "visiting area", 'exclusion_area': "exclusion area", 'cbc': "cbc"};
        vm.numberOfrows = [5, 10, 15, 20, 25];

        vm.init = init;
        vm.deleteLocation = deleteLocation;


        function init() {
            //get data here from server
        }

        function deleteLocation() {
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


    }

})();
