import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, SplineSeries
} from 'react-jsx-highcharts'

const HighchartsWrapper = ({ categories, recycled, norecycled, avg, pieData }) => {
  return (
    <HighchartsChart>
      <Chart />
      <Legend />
      <XAxis categories={categories} />
      <YAxis>
        <ColumnSeries name="Recyclé" data={recycled} />
        <ColumnSeries name="Non recyclé" data={norecycled} />
        <SplineSeries name="Moyenne" data={avg} />
        {/* <PieSeries name="Consommation total" data={[
          {
            name: 'Souriya',
            y: 13
          }, {
            name: 'Sarah',
            y: 23
          }]} 
          center={[100, 80]} 
          size={100} 
          showInLegend={false} /> */}
      </YAxis>
    </HighchartsChart>
  )
}

export default withHighcharts(HighchartsWrapper, Highcharts)