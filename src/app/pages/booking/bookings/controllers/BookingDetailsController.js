/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.bookings')
        .controller('BookingDetailsController', BookingDetailsController);

    /** @ngInject */

    function BookingDetailsController($stateParams) {

        var vm = this;
        vm.booking = {};
        vm.init = init;

        function init() {
            if ($stateParams.itemId) {
                if ($stateParams.itemId == '1133312asdasd') {
                    vm.editData = true;
                    //todo Get cars data from server make and model
                    vm.booking =
                        {
                            ID: '1133312asdasd',
                            MMCode:'dsd33232',
                            bookingDate: "2017-03-01",
                            type: "CBC",
                            region: "Western Cape",
                            address: "34 bree street",
                            nameOfPlace: "gardens cbc",
                            name: "hesham",
                            email: "heshamelmasry@outlook.com",
                            phoneNumber: "0813284099",
                            year: "2014",
                            make: "volkswagen",
                            model: "polo",
                            fuelType: "petrol",
                            variant: "6n",
                            mileage: "2321123",
                            quoteDetail: "good",
                            spareKeys: true,
                            majorAccidents: true,
                            warningLights: false,
                            serviceHistory: true,
                            color: "blue"
                        };
                }
                // Make an api call with the booking item id and get the data of the booking
                console.log("Hello i am the booking id coming from edit booking  " + $stateParams.itemId);
            }
        }
    }

})();
