import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts'

const HighchartsWrapper = ({ categories, recycled, norecycled, pieData }) => {
  return (
    <HighchartsChart>
      <Chart />
      <Legend />
      <XAxis categories={categories} />
      <YAxis>
        <ColumnSeries name="Recyclé" data={recycled} />
        <ColumnSeries name="Non recyclé" data={norecycled} />
        <SplineSeries name="Moyenne" data={[3, 2.67, 3, 6.33, 3.33]} />
        <PieSeries name="Consommation total" data={pieData} center={[100, 80]} size={100} showInLegend={false} />
      </YAxis>
    </HighchartsChart>
  )
}

export default withHighcharts(HighchartsWrapper, Highcharts)