import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ROUTES from './routes'

export function PrivateRoute ({ component: Component, ...rest}) {
  const { user } = rest;
  return (
    <Route {...rest} render={(props) => (
      (user !== null && user !== undefined)
        ? <Component {...props} />
        : <Redirect to={ROUTES.welcome + ROUTES.signin} />
    )} />
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(PrivateRoute)