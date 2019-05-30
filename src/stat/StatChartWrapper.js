import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts'

const StatChartWrapper = ({ categories, recycled, norecycled, avg, pieData }) => {
  return (
    <HighchartsChart>
      <Chart />
      <Legend />
      <XAxis categories={categories} />
      <YAxis>
        <ColumnSeries name="Recyclé" data={recycled} />
        <ColumnSeries name="Non recyclé" data={norecycled} />
        <SplineSeries name="Moyenne" data={avg} />
      </YAxis>
    </HighchartsChart>
  )
}

export default withHighcharts(StatChartWrapper, Highcharts)