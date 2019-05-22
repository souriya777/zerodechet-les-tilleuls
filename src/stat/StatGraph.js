import React, { Component } from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts'

class StatGraph extends Component {

  render() {
    const pieData = [{
      name: 'Recyclé',
      y: 13
    }, {
      name: 'Non recyclé',
      y: 23
    }]

    return (
      <HighchartsChart>
        <Chart />

        <Legend />

        <XAxis categories={['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']} />

        <YAxis>
          <ColumnSeries name="Recyclé" data={[3, 2, 1, 3, 4, 4, 6]} />
          <ColumnSeries name="Non recyclé" data={[2, 3, 5, 7, 6, 2, 1]} />
          <SplineSeries name="Moyenne" data={[3, 2.67, 3, 6.33, 3.33]} />
          <PieSeries name="Consommation total" data={pieData} center={[100, 80]} size={100} showInLegend={false} />
        </YAxis>
      </HighchartsChart>
    )
  }
}

export default withHighcharts(StatGraph, Highcharts)