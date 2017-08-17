/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.booking.bookings')
        .controller('BookingsListController', BookingsListController);

    /** @ngInject */

    function BookingsListController($uibModal) {

        var vm = this;
        // MY OBJECT
        vm.bookingsTableData = {};
        vm.numberOfRows = [5, 10, 15, 20, 25];
        vm.init = init;
        vm.deleteBooking = deleteBooking;

        function init() {
            //todo get data from server

            vm.bookingsTableData = [
                {
                    id: '12asdasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'
                },
                {
                    id: '12asdsdsd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12ass12asd',
                    bookingDate: '10/29/2010',
                    type: 'visiting area',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12ascvasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12ass6dasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asda11111sd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '1133312asdasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asd887asd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12as121312dasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asdsdasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12aasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12a3fsdfsdd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asda633d',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asddasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12avcssasd',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '12asda55d',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '77777',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                },
                {
                    id: '88887',
                    bookingDate: '10/29/2010',
                    type: 'cbc',
                    email: 'mdo@gmail.com',
                    make: 'volkswagen',
                    model: 'polo'

                }
            ];
        }


        function deleteBooking() {
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
                controllerAs: 'modalActions',
            });

        }


    }

})();
