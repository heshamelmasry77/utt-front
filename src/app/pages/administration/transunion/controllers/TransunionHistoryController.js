/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.transunion')
        .controller('TransunionHistoryController', TransunionHistoryController);

    /** @ngInject */

    function TransunionHistoryController() {
        var vm = this;
        vm.transunionHistoryData = {};
        // PAGE MAX SIZE
        vm.smartTablePageSize = 10;

        vm.init = init;


        function init() {
            //to do get data here from server
            vm.transunionHistoryData = [

                {
                    id: '12312314dd1',
                    time: '11/01/1992 10:00pm',
                    action: 'changed the carzar master model of corsa ',
                    user: 'rob jhb'

                }, {
                    id: '12312fsdfsd',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '324sdfsdas',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '2132dsadasd',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: 'fsfdsf23432',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '54645hfdgdf',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: 'hghgfh43',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: 'csdfs22423',
                    time: '11/11/2011 10:00pm',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '654645hfgdf',
                    time: '11/11/2011 10:00pm',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '12312fdsfsss',
                    time: '11/11/2011 10:00pm',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: '5435hfdgd',
                    time: '11/11/2011 10:00pm',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }, {
                    id: 'dfsdfh87',
                    time: '11/11/2011',
                    action: 'changed the carzar master model of polo ',
                    user: 'rob capetown'

                }

            ];

        }

    }
})();
