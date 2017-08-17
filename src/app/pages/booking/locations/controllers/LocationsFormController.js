/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.locations')
        .controller('LocationsFormController', LocationsFormController);

    /** @ngInject */

    function LocationsFormController($stateParams) {


        var vm = this;
        // MY OBJECT
        vm.location = {
            type: 'visiting_area'
        };
        vm.editData = false;
        vm.types = {'visiting_area': "visiting area", 'exclusion_area': "exclusion area", 'cbc': "cbc"};
        vm.init = init;
        vm.submitLocation = submitLocation;
        vm.change = change;
        vm.openInitialDatePicker = openInitialDatePicker;
        vm.openEndDatePicker = openEndDatePicker;
        vm.initialDateOpened = false;
        vm.endDateOpened = false;
        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.options = {
            showWeeks: false
        };
        vm.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        vm.intervals = {'15_mins': "15 mins", '30_mins': "30 mins", '60_mins': "60 mins", 'close': "close"};
        vm.myDatetimeRange = {
            "time": {
                "from": 420,
                "to": 1200,
                "dFrom": 0,
                "dTo": 1440,
                "step": 15,
                "minRange": 15,
                "hours24": false
            },
            "hasDatePickers": false,
            "hasTimeSliders": true
        };

        vm.inspectionInspectorData = [
            {
                numberOfInspectors: '1',
                numberOfInspections: '1'
            }
            ,
            {
                numberOfInspectors: '2',
                numberOfInspections: '2'
            },
            {
                numberOfInspectors: '3',
                numberOfInspections: '3'
            },
            {
                numberOfInspectors: '4',
                numberOfInspections: '4'
            },
            {
                numberOfInspectors: '5',
                numberOfInspections: '5'
            },
            {
                numberOfInspectors: '6',
                numberOfInspections: '6'
            },
            {
                numberOfInspectors: '7',
                numberOfInspections: '7'
            },
            {
                numberOfInspectors: '8',
                numberOfInspections: '8'
            },
            {
                numberOfInspectors: '9',
                numberOfInspections: '9'
            },
            {
                numberOfInspectors: '10',
                numberOfInspections: '10'
            }];


        function init() {
            if ($stateParams.itemId) {
                if ($stateParams.itemId == '2342fdss') {
                    vm.editData = true;
                    vm.location = {
                        name: 'test',
                        type: 'cbc',
                        address: 'dfkfkdkfd'
                    };
                }
                // Make an api call with the location item id and get the data of the location
                console.log("Hello i am the location id coming from edit location  " + $stateParams.itemId);
            }
        }

        function submitLocation() {
            // from
            var fromHours = parseInt(vm.myDatetimeRange.time.from / 60, 10);
            var fromMinutes = (vm.myDatetimeRange.time.from - (fromHours * 60)) < 10 ? '0' + (vm.myDatetimeRange.time.from - (fromHours * 60)) : vm.myDatetimeRange.time.from - (fromHours * 60);
            // to
            var toHours = parseInt(vm.myDatetimeRange.time.to / 60, 10);
            var toMinutes = (vm.myDatetimeRange.time.to - (toHours * 60)) < 10 ? '0' + (vm.myDatetimeRange.time.to - (toHours * 60)) : vm.myDatetimeRange.time.to - (toHours * 60);

            // from
            console.log(fromHours + " : " + fromMinutes);
            // to
            console.log(toHours + " : " + toMinutes);
            console.log(vm.location);
            // if (vm.location.name && vm.location.address && vm.location.boundaries && vm.location.nonVisitingRadius) {
            //     // To do make an API call
            // }
        }

        function change() {
            for (var i in vm.location) {
                if (i !== 'type')
                    delete vm.location[i];
            }
        }


        function openInitialDatePicker() {
            vm.initialDateOpened = true;
        }

        function openEndDatePicker() {
            vm.endDateOpened = true;
        }


    }
})
();
