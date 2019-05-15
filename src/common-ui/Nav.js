import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import PrivateRoute from '../app/PrivateRoute'

import NavCheck from './NavCheck'
import NavConnect from './NavConnect'
import Menu from './Menu'

const Nav = ({ user }) => (
  <>
    <NavCheck />

    <Route 
      exact 
      path={[ROUTES.signin, ROUTES.signup, ROUTES.tuto, ROUTES.landing]} component={NavConnect} 
    />

    {/* FIXME TEMP */}
    {/* <PrivateRoute  */}
    <Route
      path={[ROUTES.stat, ROUTES.weight, ROUTES.rdv, ROUTES.profile]} 
      component={Menu} 
    />
  </>
)

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Nav)