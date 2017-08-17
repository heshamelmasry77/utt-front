/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.transunion')
        .controller('TransunionListController', TransunionListController);

    /** @ngInject */

    function TransunionListController($uibModal, editableOptions, editableThemes) {


        var vm = this;
        vm.transunionRecords = {};
        // PAGE MAX SIZE
        vm.smartTablePageSize = 10;

        vm.init = init;
        vm.editIsEnabled = editIsEnabled;
        vm.editCarzarMasterModel = editCarzarMasterModel;
        function init() {
            //to do get data here from server
            vm.transunionListData = [
                {
                    id: 1,
                    mmCode: 'dsadasd231dad',
                    type: 'A',
                    make: 'volkswagen',
                    carzarMasterModel: 'golf',
                    variant: 'golf 1.4',
                    year: '2005',
                    tradePrice: '23213',
                    isEnabled: true

                }, {
                    id: 2,
                    mmCode: 'fdsfsdfe34',
                    type: 'B',
                    make: 'ford',
                    carzarMasterModel: 'escort',
                    variant: 'escort 2',
                    year: '2002',
                    tradePrice: '23213',
                    isEnabled: false

                }, {
                    id: 3,
                    mmCode: '2sdasd',
                    type: 'C',
                    make: 'BMW',
                    carzarMasterModel: '1 series',
                    variant: '1 series 212',
                    year: '2004',
                    tradePrice: '232141',
                    isEnabled: true

                }, {
                    id: 4,
                    mmCode: '32432fs21',
                    type: 'D',
                    make: 'honda',
                    carzarMasterModel: 'city',
                    variant: 'city 1213',
                    year: '2001',
                    tradePrice: '565456',
                    isEnabled: true

                }, {
                    id: 5,
                    mmCode: '23ssds',
                    type: 'A',
                    make: 'toyota',
                    carzarMasterModel: 'yaris',
                    variant: ' yaris 2',
                    year: '2017',
                    tradePrice: '2342',
                    isEnabled: true

                }, {
                    id: 6,
                    mmCode: '324sfs25',
                    type: 'B',
                    make: 'tata',
                    carzarMasterModel: 'indica',
                    variant: 'indica1',
                    year: '2006',
                    tradePrice: '234234',
                    isEnabled: true

                }, {
                    id: 7,
                    mmCode: '32432sds',
                    type: 'B',
                    make: 'ford',
                    carzarMasterModel: 'focus',
                    variant: 'focus21',
                    year: '2004',
                    tradePrice: '325325234',
                    isEnabled: true

                }
            ];
        }

        function editIsEnabled(data, e) {

            console.log(data, e);
            e.preventDefault();
            e.stopPropagation();

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

        function editCarzarMasterModel(data) {
            console.log(data);
        }

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon" ng-click="TransunionList.editCarzarMasterModel(item)" ><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    }

})();
