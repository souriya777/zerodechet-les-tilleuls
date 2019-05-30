import React from 'react'
import { connect } from 'react-redux'
import UserChartWrapper from './UserChartWrapper'

const UserGraph = ({ stat }) => {
  
  return (
    <UserChartWrapper 
      currently={666} 
      goal={777} 
    />
  )
}

const mapStateToProps = state => ({stat: state.stat})

export default connect(mapStateToProps)(UserGraph)