import React from 'react'
import { connect } from 'react-redux'
import UserChartWrapper from './UserChartWrapper'

const UserGraph = ({ currently, goal }) =>
  <UserChartWrapper 
    currently={currently} 
    goal={goal} 
  />

export default connect()(UserGraph)