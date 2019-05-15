import React from 'react'

import { 
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"

import ROUTES from '../app/routes'
import PrivateRoute from '../app/PrivateRoute'

import UserConnect from '../user/UserConnect'
import Tuto from '../info/Tuto'
import Stat from '../stat/Stat'

const Content = ({ location }) =>
  <TransitionGroup> 
    <CSSTransition
      key={location.key}
      timeout={1000}
      classNames={'fade'}
    >
      <Switch location={location}>
        <Route path={ROUTES.tuto} component={Tuto} />
        <Route path={ROUTES.signin} component={UserConnect} />
        <Route path={ROUTES.signup} component={UserConnect} />
        <PrivateRoute path={ROUTES.stat} component={Stat} />
        <Route exact path={ROUTES.landing} component={UserConnect} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>

export default withRouter(Content)