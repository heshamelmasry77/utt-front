/* eslint-disable */
/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('Utt.pages.ui', [
    'Utt.pages.ui.typography',
    'Utt.pages.ui.buttons',
    'Utt.pages.ui.icons',
    'Utt.pages.ui.modals',
    'Utt.pages.ui.grid',
    'Utt.pages.ui.alerts',
    'Utt.pages.ui.progressBars',
    'Utt.pages.ui.notifications',
    'Utt.pages.ui.tabs',
    'Utt.pages.ui.slider',
    'Utt.pages.ui.panels'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, ConfigProvider) {
      if(ConfigProvider.showExamples) {
          $stateProvider
              .state('ui', {
                  url: '/ui',
                  template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                  abstract: true,
                  title: 'UI Features',
                  sidebarMeta: {
                      icon: 'ion-android-laptop',
                      order: 200,
                  },
              });
      }
  }

})();
