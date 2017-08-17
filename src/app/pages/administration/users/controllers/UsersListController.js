/**
 * @author heshamelmasry
 * created on 23.03.2017
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.administration.users')
        .controller('UsersListController', UsersListController);

    /** @ngInject */

    function UsersListController($uibModal) {

        var vm = this;
        vm.numberOfrows = [5, 10, 15, 20, 25];

        // MY OBJECT
        vm.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Developer',
                createdDate: '10/29/2010'
            },
            {
                id: 2,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Developer',
                createdDate: '10/29/2010'

            },
            {
                id: 3,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Developer',
                createdDate: '10/29/2010'

            },
            {
                id: 4,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Developer',
                createdDate: '10/29/2010'

            },
            {
                id: 5,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 16,
                firstName: "Francisca",
                lastName: "Brady",
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            },
            {
                id: 17,
                firstName: "Tillman",
                lastName: "Figueroa",
                email: 'mdo@gmail.com',
                role: 'Manager',
                createdDate: '10/29/2010'

            },
            {
                id: 18,
                firstName: "Jimenez",
                lastName: "Morris",
                email: 'mdo@gmail.com',
                role: 'Designer',
                createdDate: '10/29/2010'

            }
        ];
        // PAGE MAX SIZE
        vm.smartTablePageSize = 10;

        vm.roles = ["Developer", "Designer", "Manager"];

        vm.init = init;
        vm.deleteUser = deleteUser;


        function init() {
            //get data here from server
        }

        function deleteUser() {
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


    }

})();
