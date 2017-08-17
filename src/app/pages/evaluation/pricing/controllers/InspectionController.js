(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation')
        .controller('InspectionController', InspectionController);

    /** @ngInject */

    function InspectionController($stateParams, $state, InspectionApiService, $log) {

        var vm = this;

        vm.inspectionData = {};

        vm.init = init;

        function init() {
            if ($stateParams.itemId) {
                $log.debug('Hello, this is inspection with id ' + $stateParams.itemId);

                InspectionApiService.getInspectionById($stateParams.itemId).then(function(data){
                    vm.inspectionData = data;
                    $log.debug('Here is inspection data:', vm.inspectionData);
                }).catch(function(error){
                    if (!error.type || error.type !== 'wrongType') {
                    //todo discuss error handling
                    }
                });
            }
        }
    }

})();