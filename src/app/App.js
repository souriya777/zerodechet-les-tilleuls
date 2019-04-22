import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss';
import Loading from '../utils/Loading';
import ROUTES from './routes'
// import { PrivateRoute } from './PrivateRoute'

const Welcome = React.lazy(() => import('./Welcome'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const My404 = React.lazy(() => import('../utils/My404'));

// TODO firebase DB
// - error handling
// IoC, KISS, DRY => container, component, hook and ...?
// - optimize : minification

// FIXME rendre Signup & Contact 'generiques'
// TODO logout button
// TODO nous contacter boutton + form

// TODO extra
// firebase : configurer les messages reset/update pwd 


class App extends Component {

  
  render() {
    return (
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from={ROUTES.landing} to={ROUTES.welcome} />

            <Route path={ROUTES.welcome} component={Welcome} />
            {/* FIXME user authentication checking */}
            {/* <PrivateRoute path={ROUTES.dashboard} component={Dashboard} /> */}
            <Route path={ROUTES.dashboard} component={Dashboard} />
            <Route component={My404} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

// FIXME
function mapStateToProps (state) {
  const user = state.user
  return {
    user,
    loading: user === null
  }
}

export default connect(mapStateToProps)(App);
