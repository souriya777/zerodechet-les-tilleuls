import React from 'react'
import ChartistGraph from 'react-chartist'

const ProgressChart = (props) => (
  <ChartistGraph data={props.data} options={props.options} type={props.type} />
)

export default ProgressChart