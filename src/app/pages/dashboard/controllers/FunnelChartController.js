/* global AmCharts:false */
/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('FunnelChartController', FunnelChartController);

  /** @ngInject */
  function FunnelChartController($element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    //check this
    AmCharts.makeChart(id, {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: 'Website Sessions',
          value: 200
        },
        {
          title: 'Online Quotes',
          value: 123
        },
        {
          title: 'Inspections',
          value: 98
        },
        {
          title: 'Confirmed Bookings',
          value: 72
        },
        {
          title: 'Acquisitions',
          value: 35
        }

      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths
    });
  }
})();
