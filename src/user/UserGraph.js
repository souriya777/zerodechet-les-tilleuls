import React from 'react'
import { connect } from 'react-redux'
import UserChartWrapper from './UserChartWrapper'

import { isLogged } from '../utils/user-utils'

const UserGraph = ({ stat, user }) => {

  const goal = isLogged(user) ? `${user.goal}g/hab/jr` : ``
  const currently = 444
  
  return (
    <UserChartWrapper 
      currently={goal} 
      goal={currently} 
    />
  )
}

const mapStateToProps = state => ({
    user: state.user,
    stat: state.stat
  }
)

export default connect(mapStateToProps)(UserGraph)