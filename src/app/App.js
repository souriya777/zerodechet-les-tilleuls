import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import '../_resources/sass/main.scss';
import Loading from '../utils/Loading';
import BrowserDetection from '../utils/BrowserDetection';
import LocationUtils from '../utils/LocationUtils';
import ROUTES from './routes'
import { PrivateRoute } from './PrivateRoute'


// FIXME move in container
import LoadingBar from 'react-redux-loading'

const Welcome = React.lazy(() => import('./Welcome'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const My404 = React.lazy(() => import('../utils/My404'));

// TODO TECHNICAL ASPECTS:
// - authent
// - firebase DB
// - error handling
// - optimize : minification
// - offline mode

// FIXME rendre Signup & Contact 'generiques'
// TODO logout button
// TODO nous contacter boutton + form


class App extends Component {

  
  render() {
    const myStyle = {
      backgroundColor: 'pink'
    }
    return (
      <Router>
        <LoadingBar />
        <div className="dev-info">
          React v{React.version}
          <Route path={ROUTES.landing} component={BrowserDetection} />
          <Route path={ROUTES.landing} component={LocationUtils} />
        </div>

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
