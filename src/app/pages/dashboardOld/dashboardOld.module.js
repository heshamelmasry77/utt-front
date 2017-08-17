/* eslint-disable */
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboardOld', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, ConfigProvider) {
      if(ConfigProvider.showExamples) {
          $stateProvider
              .state('dashboardOld', {
                  url: '/dashboardOld',
                  templateUrl: 'app/pages/dashboardOld/dashboardOld.html',
                  title: 'DashboardOld',
                  sidebarMeta: {
                      icon: 'ion-android-home',
                      order: 0,
                  },
              });
      }
  }

})();
