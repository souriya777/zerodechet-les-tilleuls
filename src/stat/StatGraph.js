import React from 'react'
import { connect } from 'react-redux'
import HighchartsWrapper from '../utils/HighchartsWrapper'

const StatGraph = ({ stat }) => {
  if (! stat) {
    return null
  } 
  
  return (
    <HighchartsWrapper 
      categories={stat.categories} 
      recycled={stat.recycled} 
      norecycled={stat.norecycled} 
    />
  )
}

const mapStateToProps = state => ({stat: state.stat})

export default connect(mapStateToProps)(StatGraph)