import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
import NavCheck from './NavCheck'
import { NavConnect, NavConnectClose } from './NavConnect'

const Nav = ({ location }) => (
  <>
    <NavCheck />

    <Switch location={location}>
      <Route path={ROUTES.tuto} component={NavConnect} />
      <Route path={ROUTES.signin} component={NavConnectClose} />
    </Switch>

    <div className='nav__menu'>
      MENU
    </div>
  </>
)

export default withRouter(Nav)