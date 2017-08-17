/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.evaluation')
        .controller('QuotesController', QuotesController);

    /** @ngInject */

    function QuotesController() {

        var vm = this;
        vm.pageSizeList = [10,20,40,50,100];
        vm.quotesDataList = [
            {
                id: '323fdx4',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'BMW',
                model: 'X6',
                email: 'bwmeme@gmail.com',
                tradePrice: 80000,
                maxQuote: 74000
            },
            {
                id: '323fddfd3',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Audi',
                model: 'A4',
                email: 'audi@gmail.com',
                tradePrice: 90000,
                maxQuote: 80000

            },
            {
                id: 'dfd3r3s',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'BMW',
                model: 'X5',
                email: 'bwmx5@gmail.com',
                tradePrice: 60000,
                maxQuote: 55000

            },
            {
                id: '323d2fdx4',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Ford',
                model: 'Mondeo',
                email: 'ford@ford.com',
                tradePrice: 55000,
                maxQuote: 44000

            },
            {
                id: '323fdf3dx4',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Fiat',
                model: 'Punto',
                email: 'fiat@fiat.com',
                tradePrice: 40000,
                maxQuote: 30000

            },
            {
                id: 'dfd3r3',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Ford',
                model: 'Focus',
                email: 'ford@ford.com',
                tradePrice: 50000,
                maxQuote: 40000

            },
            {
                id: 'fjg343',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Mercedes',
                model: 'C Class',
                email: 'mdo2@gmail.com',
                tradePrice: 90000,
                maxQuote: 76000

            },
            {
                id: 'fvc88d',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Porsche',
                model: '911',
                email: 'mdo@gmail.com',
                tradePrice: 200000,
                maxQuote: 165000

            },
            {
                id: 'dfd34',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'BWM',
                model: 'Series 3',
                email: 'mdo@gmail.com',
                tradePrice: 80000,
                maxQuote: 76000

            },
            {
                id: 'dfdc33',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Chrysler',
                model: '300C',
                email: 'sleep@gmail.com',
                tradePrice: 100000,
                maxQuote: 90000

            },
            {
                id: 'fcrc454',
                bookingDate: '25.05.2017 9:30 - 10:00 AM',
                make: 'Citroen',
                model: 'C4',
                email: 'test12@test.com',
                tradePrice: 60000,
                maxQuote: 55000

            }
        ];
        // PAGE MAX SIZE
        vm.pageSize = 10;

        vm.init = init;


        function init() {
            //get data here from server
            console.log('test server init function');
        }




    }

})();

