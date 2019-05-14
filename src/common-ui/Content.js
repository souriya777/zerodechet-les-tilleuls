import React from 'react'

import { 
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"

import ROUTES from '../app/routes'
import PrivateRoute from '../app/PrivateRoute'

const UserConnect = React.lazy(() => import('../user/UserConnect'))
const Stat = React.lazy(() => import('../stat/Stat'))
const Tuto = React.lazy(() => import('../info/Tuto'))

const Content = ({ location }) => 
  <TransitionGroup> 
    <CSSTransition
      key={location.key}
      timeout={300}
      classNames={'fade'}
      unmountOnExit
    >
      <Switch location={location}>
        <Route path={ROUTES.tuto} component={Tuto} />
        <Route path={ROUTES.signin} component={UserConnect} />
        <Route path={ROUTES.signup} component={UserConnect} />
        <Route exact path={ROUTES.landing} component={UserConnect} />
        <PrivateRoute path={ROUTES.stat} component={Stat} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>

export default withRouter(Content)