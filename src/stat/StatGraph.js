import React from 'react'
import StatChartWrapper from './StatChartWrapper'

const StatGraph = ({ stat }) => {
  return (
    <StatChartWrapper 
      categories={stat.categories} 
      recycled={stat.recycled} 
      norecycled={stat.norecycled} 
      avg={stat.avg}
    />
  )
}

export default StatGraph