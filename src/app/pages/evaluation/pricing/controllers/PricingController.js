/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation')
        .controller('PricingController', PricingController);

    /** @ngInject */

    function PricingController($state, $stateParams, InspectionApiService, $log) {

        var vm = this;
        vm.newInspections = newInspections;
        vm.manualEvaluation = manualEvaluation;
        vm.covers = covers;
        vm.showInspection = showInspection;
        vm.chooseDate = chooseDate;
        vm.searchParams = {
            page: 1,
            limit: 10,
            offset: 0,
            field: 'id',
            dir: 'asc',
            pricingType:'offer'
        };

        vm.showParam = showParam;
        vm.init = init;

        vm.selectPage = selectPage;
        vm.sortField = sortField;
        vm.rangeDate = {startDate: null, endDate:null};


        vm.statusList = ['new', 'pending' , 'done'];
        vm.regionList = ['abc', 'cpt' , 'rrr'];

        vm.numPages = 0;
        vm.pages = [];

        function chooseDate() {
            vm.searchParams.fromDate = vm.rangeDate.startDate;
            vm.searchParams.toDate = vm.rangeDate.endDate;
            vm.showParam(true);
        }

        function showInspection(id) {
            //переписать к хуям на ui-sref
            $state.go('evaluation.pricing.inspection', {itemId: id});
        }

        function showParam(param) {
            if (!param) {
                vm.searchParams.page = 1;
            }
            //переписать к хуям на ui-sref
            $state.go('evaluation.pricing.list', vm.searchParams);
        }




        function init() {
            for (var i in $stateParams) {
                if ($stateParams[i] !== undefined) {
                    vm.searchParams[i] = $stateParams[i];
               }
            }
            vm.rangeDate.startDate = vm.searchParams.fromDate;
            vm.rangeDate.endDate = vm.searchParams.toDate;

            vm.searchParams.offset =  vm.searchParams.limit * (vm.searchParams.page - 1);

            InspectionApiService.getInspections(vm.searchParams).then(function(res){
                vm.inspectionList = res.data;
                $log.debug('Here is inspections:', vm.inspectionList);

                vm.numPages = Math.ceil(res.total/vm.searchParams.limit);
                vm.pages = Array.from(new Array(vm.numPages), function(value,index) {
                    return  index + 1;
                });

            }).catch(function(error){
                console.log('error');
                if (!error.type || error.type !== 'wrongType') {
                    //todo discuss error handling
                }
            });

        }

        function selectPage(page) {
            if (page > 0 && page <= vm.numPages && page != vm.searchParams.page) {
                vm.searchParams.page = page;
                vm.searchParams.offset =  vm.searchParams.limit * (vm.searchParams.page - 1);
                vm.showParam(true);
            }
        }

        function sortField(param) {
            if (vm.searchParams.field === param) {
                vm.searchParams.dir = (vm.searchParams.dir === 'asc' ? 'desc' : 'asc');
            } else {
                vm.searchParams.dir = 'asc';
                vm.searchParams.field = param;
            }

            vm.showParam();
        }



        function newInspections() {


        }

        function manualEvaluation() {


        }

        function covers() {


        }


    }

})();
