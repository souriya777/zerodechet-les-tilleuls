import React from 'react'
import { connect } from 'react-redux'
import { Switch, Redirect } from 'react-router-dom'

import ROUTES from '../app/routes'
import { isLogged } from '../utils/user-utils'

const NavCheck = ({ user }) => (
  <Switch>
    <Redirect 
      exact
      from={ROUTES.landing} 
      to={ROUTES.tuto} 
    />
    { isLogged(user)
      ? <Redirect from={ROUTES.signin} to={ROUTES.stat} />
      : ''
    }
  </Switch>
)

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(NavCheck)