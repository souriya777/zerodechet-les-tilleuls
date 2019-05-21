import React, { Component } from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries
} from 'react-jsx-highcharts'

class StatGraph extends Component {

  render() {
    const pieData = [{
      name: 'Souriya',
      y: 13
    }, {
      name: 'Sarah',
      y: 23
    }, {
      name: 'Karim',
      y: 19
    }]

    return (
      <HighchartsChart>
        <Chart />

        <Legend />

        <XAxis categories={['Pommes', 'Oranges', 'Poires', 'Bananes', 'Prunes']} />

        <YAxis>
          <ColumnSeries name="Souriya" data={[3, 2, 1, 3, 4]} />
          <ColumnSeries name="Sarah" data={[2, 3, 5, 7, 6]} />
          <ColumnSeries name="Karim" data={[4, 3, 3, 9, 0]} />
          <SplineSeries name="Moyenne" data={[3, 2.67, 3, 6.33, 3.33]} />
          <PieSeries name="Consommation total" data={pieData} center={[100, 80]} size={100} showInLegend={false} />
        </YAxis>
      </HighchartsChart>
    )
  }
}

export default withHighcharts(StatGraph, Highcharts)