import React, { Component } from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart, withHighcharts, XAxis, YAxis, Pane, SolidGaugeSeries
} from 'react-jsx-highcharts'

const plotOptions = {
  solidgauge: {
    dataLabels: {
      y: 5,
      borderWidth: 0,
      useHTML: true
    }
  }
}

class GoalChartWrapper extends Component {
  state = {
    kmph: 80
  }

  componentDidMount () {
    this.interval = window.setInterval(this.updateSpeed, 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render() {
    const { kmph } = this.state
    console.log(kmph);
    

    return (
      <HighchartsChart gauge plotOptions={plotOptions}>
        <Pane
          center={['50%', '85%']}
          size='100%'
          startAngle={-90}
          endAngle={90}
          background={{
            backgroundColor: '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
          }} />
        <XAxis />
        <YAxis
          stops={[
            [0.1, '#55BF3B'],
            [0.5,  '#DDDF0D'],
            [0.9, '#DF5353']
          ]}
          lineWidth={0}
          minorTickInterval={null}
          tickPixelInterval={400}
          tickWidth={0}
          labels={{
            y: 16,
            style: { display: 'none' }
          }}
          min={0}
          max={200}>
          <YAxis.Title y={-110}>Speed</YAxis.Title>
          <SolidGaugeSeries
            name='Speed'
            data={555}
            dataLabels={{
              format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/><span style="font-size:12px;color:silver">km/h</span></div>',
              y: -50
            }}
            tooltip={{
              valueSuffix: ' g/jr'
            }}
          />
        </YAxis>
      </HighchartsChart>
    )
  }
}

export default withHighcharts(GoalChartWrapper, Highcharts)