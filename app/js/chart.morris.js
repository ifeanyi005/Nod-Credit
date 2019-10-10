$(function () {
  'use strict';

  new Morris.Bar({
    element: 'morrisBar1',
    data: [{
        y: 'JAN',
        a: 100,
        b: 90
      },
      {
        y: 'FEB',
        a: 75,
        b: 65
      },
      {
        y: 'MAR',
        a: 50,
        b: 40
      },
      {
        y: 'APR',
        a: 75,
        b: 65
      },
      {
        y: 'MAY',
        a: 50,
        b: 40
      },
      {
        y: 'JUN',
        a: 100,
        b: 90
      },
      {
        y: 'JUL',
        a: 75,
        b: 65
      },
      {
        y: 'AUG',
        a: 50,
        b: 40
      },
      {
        y: 'SEP',
        a: 75,
        b: 65
      },
      {
        y: 'OCT',
        a: 50,
        b: 40
      },
      {
        y: 'NOV',
        a: 75,
        b: 65
      },
      {
        y: 'DEC',
        a: 50,
        b: 40
      },
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    grid: false,
    barSizeRatio: 0.35,
    labels: ['Loan Disbursed', 'Loan Repayment'],
    barColors: ['#FF9000', '#0668E3'],
    // xLabelAngle: 50,
    xLabelMargin: 10,
    gridTextSize: 11,
    resize: true,
  });

  new Morris.Donut({
    element: 'morrisDonut1',
    data: [{
        label: "Regular Customer",
        value: 120
      },
      {
        label: "Investors",
        value: 300
      }
    ],
    colors: ['#FF9000', '#0668E3'],
    resize: true
  });

  new Morris.Donut({
    element: 'morrisDonut2',
    data: [{
        label: "Regular Customer",
        value: 120
      },
      {
        label: "Investors",
        value: 300
      }
    ],
    colors: ['#3D449C', '#268FB2', '#2DC486', '#74DE00'],
    resize: true
  });

});