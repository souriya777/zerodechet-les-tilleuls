import React from 'react'
import ChartistGraph from 'react-chartist'

import { PROGRESSION_CHART_OPTIONS } from './ProgressHelper'

const ProgressChart = (props) => (
  <ChartistGraph data={props.data} options={PROGRESSION_CHART_OPTIONS} type={'Line'} />
)

export default ProgressChart