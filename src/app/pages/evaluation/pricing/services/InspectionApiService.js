(function () {
    'use strict';
    /* global ApplicationConfiguration */

    angular
        .module('BlurAdmin.pages.evaluation')
        .service('InspectionApiService', InspectionApiService);

    /** @ngInject */
    function InspectionApiService($http, $q, moment) {
        var self = this;
        var apiUrlDomain = 'http://0.0.0.0:3002';
        var inspectionDataList = [
            {
                id: 1,
                inspDate: new Date(),
                status: 'new',
                region: 'rrr',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 412312,
                inspDate: new Date(),
                status: 'pending',
                region: 'abc',
                maket: 'fiat',
                model: 'Punto',
                isCover: false

            },
            {
                id: 3,
                inspDate: new Date(),
                status: 'done',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: false
            },
            {
                id: 4,
                inspDate: new Date(),
                status: 'new',
                region: 'abc',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 5,
                inspDate: new Date(),
                status: 'new',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 6,
                inspDate: new Date(),
                status: 'new',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 7,
                inspDate: new Date(),
                status: 'new',
                region: 'ggg',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 8,
                inspDate: new Date(),
                status: 'new',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 9,
                inspDate: new Date(),
                status: 'new',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 10,
                inspDate: new Date(),
                status: 'new',
                region: 'ggg',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 11,
                inspDate: new Date(),
                status: 'new',
                region: 'rrr',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            },
            {
                id: 12,
                inspDate: new Date(),
                status: 'new',
                region: 'cpt',
                maket: 'fiat',
                model: 'Punto',
                isCover: true
            }
        ];

        this.getInspectionById = getInspectionById;
        this.getInspections = getInspections;


        function getInspectionById(inspectionId) {
            var deferred = $q.defer();
            //uncomment for backend integration
            if (inspectionId) {
                $http.get(apiUrlDomain + '/inspection/' + inspectionId)
                    .success(function (inspectionData) {
                        deferred.resolve(inspectionData);
                    })
                    .error(function (response) {
                    //this is for development without backend

                        if (parseInt(inspectionId) === 1) {
                            deferred.resolve({
                                id: 1,
                                inspectionDate: '04/29/2017',
                                status: 'new',
                                region: 'CPT',
                                tradePrice: '14000R',
                                offer: true,
                                manual: false,

                                userName: 'Fabio Cannavarro',
                                userMail: 'fabio78@gmail.com',
                                userPhone: '+489012345678',

                                fuelType: "Diesel",
                                make: "BMW",
                                mileage: 250000,
                                model: "7 Series",
                                transmission: "Automatic",
                                variant: "328d xDrive",
                                year: 2014,
                                carCondition: "good"
                            });

                        } else {
                            deferred.resolve();
                        }
                    });
            } else {
                deferred.reject('inspectionId is not defined');
            }

            return deferred.promise;
        }


        function getInspections(params) {
            var deferred = $q.defer();
            //uncomment for backend integration
            if (params) {

                $http.get(apiUrlDomain + '/inspections/')
                    .success(function (inspectionData) {
                        deferred.resolve(inspectionData);
                    })
                    .error(function (response) {
                        //this is for development without backend
                        var copyParams = Object.assign({}, params);

                        var filterParams = ['limit', 'page', 'offset', 'field', 'dir', 'toDate', 'pricingType'];
                        filterParams.forEach(function(item) {
                            delete copyParams[item];
                        });

                        if (copyParams.isCover) {
                            copyParams.isCover = (copyParams.isCover === 'true');
                        }

                        var copyParamsLength = Object.keys(copyParams).length;
                        var counter = 0;

                        var filteredData = inspectionDataList;
                        var total;

                        if (copyParamsLength > 0) {
                            filteredData = inspectionDataList.filter(function (elem) {
                                counter = 0;

                                for (var j in copyParams) {
                                    if (copyParams[j] && elem[j] ) {
                                        if (elem[j] == copyParams[j]) {
                                            counter++;
                                        }
                                    }

                                    if (j === 'fromDate') {
                                        if (params.toDate) {
                                            if (moment(elem.inspDate).isBetween(params.fromDate, params.toDate)) {
                                                counter++;
                                            }
                                        } else {
                                            counter++;
                                        }
                                    }
                                }
                                return copyParamsLength === counter;
                            });
                        }

                        params.limit = +params.limit;
                        total = filteredData.length;

                        // if need to sort by field ASC or DESC
                        filteredData.sort(function (obj1, obj2) {
                            if (params.dir === 'desc') {
                                if (obj1[params.field] > obj2[params.field])
                                    return -1;
                                if (obj1[params.field] < obj2[params.field])
                                    return 1;
                            } else {
                                if (obj1[params.field] < obj2[params.field])
                                    return -1;
                                if (obj1[params.field] > obj2[params.field])
                                    return 1;
                            }
                            return 0;
                        });

                        filteredData = filteredData.slice(params.offset, params.offset + params.limit);

                        deferred.resolve({data: filteredData, total: total});

                    });
            } else {
                deferred.resolve(inspectionDataList);
            }

            return deferred.promise;
        }
    }

})();
