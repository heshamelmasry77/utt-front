/* global moment:false */

'use strict';

angular.module('BlurAdmin', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',
    'daterangepicker',
    'rgkevin.datetimeRangePicker',
    'BlurAdmin.theme',
    'BlurAdmin.pages',
    'CarZarConfig'
])
    .constant('moment', moment)
    .config(function ($provide) {
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
            taOptions.forceTextAngularSanitize = false;
            return taOptions;
        }])
    }).run(function ($rootScope, $stateParams, Config) {
    $rootScope.isDebug = Config.isDebug;
    console.log('isDebug:', $rootScope.isDebug)
});

