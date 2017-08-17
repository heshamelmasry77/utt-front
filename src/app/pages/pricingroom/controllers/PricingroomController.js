/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.pricingroom')
        .controller('PricingroomController', PricingroomController);

    /** @ngInject */
    function PricingroomController(PricingroomApiService) {

        var vm = this;
        vm.init = init;
        // vm.googleData = {};
        // vm.pipdriveData = {};
        // vm.momentDate = {};

        // vm.minDateMoment = moment().subtract(6, 'month');
        // vm.maxDateMoment = moment().add(1, 'month');
        // vm.momentDate = vm.maxDateMoment.format('YYYY-MM');

        // function getYearMonth() {
        //     var dateArray = vm.momentDate.split("-");
        //     vm.year = dateArray[0];
        //     vm.month = dateArray[1];
        //
        //
        // }

        function init() {
            // DashboardApiService.getGoogleInfo().then(function (data) {
            //     vm.googleData = data;
            // }).catch(function (e) {
            //     // handle errors in processing or in error.
            //     console.log("An error happened googleinfo");
            // });

            // DashboardApiService.getPipeInfo(vm.year, vm.month).then(function (data) {
            //     vm.pipdriveData = data;
            // }).catch(function (e) {
            //     // handle errors in processing or in error.
            //     console.log("An error happened pipedrive");
            // });

            // vm.prData = [
            //     {
            //         ID: '12312dsd',
            //         date: 'Jan 2017',
            //         vehiclesBought: '12',
            //         growthOfCarsBoughtMoM: '70',
            //         carsBoughtPerWorkingDays: '3',
            //         avgCostPerCar: '31133',
            //         vehiclesBoughtJHB: '1233',
            //         vehiclesBoughtCPT: '221',
            //         vehiclesBoughtDBN: '12',
            //         vehiclesSold: '1231',
            //         usdSales: '233',
            //         zarSales: '44',
            //         salesGrowthMoM: '11',
            //         grossMargin: '21',
            //         grossMarginPerCar: '21',
            //         vehiclesSoldJHB: '1233',
            //         vehiclesSoldCPT: '221',
            //         vehiclesSoldDBN: '12',
            //         webSiteSessions: '233',
            //         onlineQuotes: '2133',
            //         inspections: '211',
            //         confirmedBookings: '212',
            //         acquisitions: '213'
            //     },
            //     {
            //         ID: '12312qe',
            //         date: 'Feb 2017',
            //         vehiclesBought: '12',
            //         growthOfCarsBoughtMoM: '70',
            //         carsBoughtPerWorkingDays: '3',
            //         avgCostPerCar: '1111',
            //         vehiclesBoughtJHB: '1233',
            //         vehiclesBoughtCPT: '221',
            //         vehiclesBoughtDBN: '12',
            //         vehiclesSold: '221',
            //         usdSales: '44',
            //         zarSales: '555',
            //         salesGrowthMoM: '11',
            //         grossMargin: '21',
            //         grossMarginPerCar: '21',
            //         vehiclesSoldJHB: '1233',
            //         vehiclesSoldCPT: '221',
            //         vehiclesSoldDBN: '12',
            //         webSiteSessions: '233',
            //         onlineQuotes: '2133',
            //         inspections: '211',
            //         confirmedBookings: '212',
            //         acquisitions: '213'
            //     }
            // ];
        }

        // getYearMonth();

    }
})();
