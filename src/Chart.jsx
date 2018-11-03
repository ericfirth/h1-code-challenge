import * as React from 'react';
import ReactHighcharts from 'react-highcharts';

const getConfigFrom = ({ series, categories }) => ({
  title: {
    text: undefined,
  },
  chart: {
    type: 'column',
  },
  xAxis: {
    categories,
    tickInterval: 1,
  },
  yAxis: {
    title: {
      text: 'In Dollars',
    },
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      pointPadding: 0,
      groupPadding: 0,
    },
  },
  series,
});

const Chart = (props: Props) => {
  console.log(props);
  return <ReactHighcharts config={getConfigFrom(props)} />;
};

export default Chart;
