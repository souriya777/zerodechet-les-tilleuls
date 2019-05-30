import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { isLogged } from '../utils/user-utils'

// FIXME conflict with ControlTower???
export function PrivateRoute ({ component: Component, ...rest}) {
  const { user } = rest
  console.log(user)
  

  return (
    <Route {...rest} render={(props) => (
        isLogged(user)
        ? <Component {...props} />
        : <Redirect to='/' />
      )} 
    />
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(PrivateRoute)