(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.dashboard')
        .service('DashboardApiService', DashboardApiService);

    /** @ngInject */
    function DashboardApiService($http, Config, $q) {
        this.getGoogleInfo = getGoogleInfo;
        this.getPipeInfo = getPipeInfo;


        function getGoogleInfo() {
            var deferred = $q.defer();


            $http.get(Config.opsApiDomain + '/api/google/get-analytics').then(
                function (data) {
                    console.log('');
                    console.log(data);
                    //reports is my object name
                    if (data) {
                        console.log("got it");
                        deferred.resolve(data);
                    } else {
                        deferred.reject('Empty data');
                    }
                }, function (response) {
                    deferred.reject(response);
                }
            );


            return deferred.promise;
        }

        function getPipeInfo(year, month) {
            var deferred = $q.defer();

            $http({
                url: Config.DashboardApiDomain + '/pipedrive/monthly-report/' + year + '-' + month,
                method: "GET"
            })
                .success(function (data) {
                    console.log(data);
                    //reports is my object name
                    if (data.reports) {
                        console.log("got it");
                        deferred.resolve(data);
                    } else {
                        deferred.reject('Empty data');
                    }
                })
                .error(function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }


    }

})();


