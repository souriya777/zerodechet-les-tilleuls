import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from '../app/routes'

import NavConnect from './NavConnect'
import Menu from './Menu'

const Nav = () => (
  <>
    <Route 
      exact 
      path={[ROUTES.signin, ROUTES.signup, ROUTES.welcome]} component={NavConnect} 
    />

    <Route
      path={[ROUTES.rdv, ROUTES.stat, ROUTES.profile, ROUTES.weight]} 
      component={Menu} 
    />
  </>
)

export default Nav