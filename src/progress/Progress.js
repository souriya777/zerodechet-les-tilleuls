import React from 'react'
import ChartistGraph from 'react-chartist'

export const ProgressHeader = () => (
  <div className="progress__header">
    <h1 className='h1'>Progression</h1>
  </div>
)

const simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}

const Progress = () => {
  return (
    <div className='progress_content'>
    <ChartistGraph data={simpleLineChartData} type={'Line'} />
    </div>
  )
}

export default Progress;