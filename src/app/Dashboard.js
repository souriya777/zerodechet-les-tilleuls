import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from './routes'
import { isNotLogged } from '../utils/user-utils'

const Dashboard = ({ user }) => {
  console.log(user);
  
  if (isNotLogged(user)) {
    return <Redirect to={ROUTES.signin} />
  }

  return (
    <div className='dashboard'>
      dashboard
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(Dashboard)
