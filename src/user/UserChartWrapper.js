import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, BarSeries
} from 'react-jsx-highcharts'

const plotOptions = {
  yAxis: [{
    gridLineWidth: 0,
    minorGridLineWidth: 0
  }],
  series: {
    dataLabels: {
      enabled: true,
      format: '{y} gr/jr',
      // align: 'right',
      // color: '#FFFFFF',
      // x: -10
    },
    pointPadding: 0.1,
    groupPadding: 0
  }
}

const UserChartWrapper = ({ currently, goal }) => {
  return (
    <HighchartsChart plotOptions={plotOptions}>
      <Chart inverted height={`${9 / 16 * 100}%`}/>
      <Legend />
      <XAxis categories={[``]} />
      <YAxis gridLineWidth='0'>
        <BarSeries name={`Aujourd'hui`} data={[150]} />
        <BarSeries name='Votre but' data={[15]} />
      </YAxis>
    </HighchartsChart>
  )
}

export default withHighcharts(UserChartWrapper, Highcharts)