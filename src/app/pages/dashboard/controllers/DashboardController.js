/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController() {

        var vm = this;
        vm.prData = {};
        vm.init = init;

        function init() {
            //todo get performance report data here from server
            vm.prData = [
                {
                    ID: '12312dsd',
                    date: 'Jan 2017',
                    vehiclesBought: '12',
                    growthOfCarsBoughtMoM: '70',
                    carsBoughtPerWorkingDays: '3',
                    avgCostPerCar: '31133',
                    vehiclesBoughtJHB: '1233',
                    vehiclesBoughtCPT: '221',
                    vehiclesBoughtDBN: '12',
                    vehiclesSold: '1231',
                    usdSales: '233',
                    zarSales: '44',
                    salesGrowthMoM: '11',
                    grossMargin: '21',
                    grossMarginPerCar: '21',
                    vehiclesSoldJHB: '1233',
                    vehiclesSoldCPT: '221',
                    vehiclesSoldDBN: '12',
                    webSiteSessions: '233',
                    onlineQuotes: '2133',
                    inspections: '211',
                    confirmedBookings: '212',
                    acquisitions: '213'
                },
                {
                    ID: '12312qe',
                    date: 'Feb 2017',
                    vehiclesBought: '12',
                    growthOfCarsBoughtMoM: '70',
                    carsBoughtPerWorkingDays: '3',
                    avgCostPerCar: '1111',
                    vehiclesBoughtJHB: '1233',
                    vehiclesBoughtCPT: '221',
                    vehiclesBoughtDBN: '12',
                    vehiclesSold: '221',
                    usdSales: '44',
                    zarSales: '555',
                    salesGrowthMoM: '11',
                    grossMargin: '21',
                    grossMarginPerCar: '21',
                    vehiclesSoldJHB: '1233',
                    vehiclesSoldCPT: '221',
                    vehiclesSoldDBN: '12',
                    webSiteSessions: '233',
                    onlineQuotes: '2133',
                    inspections: '211',
                    confirmedBookings: '212',
                    acquisitions: '213'
                }
            ];
            vm.selectedPr = vm.prData[0];

        }
    }
})();
