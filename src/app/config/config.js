angular
    .module('CarZarConfig', [])
    .provider('Config', function () {
        return {
            pricingApiDomain: 'https://cz4-pricing.herokuapp.com',
            bookingApiDomain: 'https://cz4-booking.herokuapp.com',
            opsApiDomain: 'https://ms-ops-api.herokuapp.com',
            inspectorAppApiDomain:'https://inspector-app-ms-staging.herokuapp.com',
            isDebug: false,
            showExamples: false,
            $get: function () {
                return this;
            }
        }
    });
