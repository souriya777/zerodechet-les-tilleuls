import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import './_resources/sass/main.scss';
import Loading from './components/Loading';
import BrowserUtils from './components/BrowserUtils';
import LocationUtils from './components/LocationUtils';
import { handleSignin } from './actions/user'


// FIXME move in container
import LoadingBar from 'react-redux-loading'

const LazyWelcome = React.lazy(() => import('./pages/Welcome'));
const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));
const LazyMy404 = React.lazy(() => import('./pages/My404'));

// FIXME rendre Signup & Contact 'generiques'
// TODO logout button
// TODO nous contacter boutton + form

// TODO TECHNICAL ASPECTS:
// - state management :
// which data? login id
// - authent
// - firebase DB
// - error handling
// - optimize : minification
// - offline mode


class App extends Component {

  // FIXME move in container ?
  componentDidMount() {
    this.props.dispatch(handleSignin())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <div className="dev-info">
          React v{React.version}
          <Route path='/' component={BrowserUtils} />
          <Route path='/' component={LocationUtils} />
        </div>

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from='/' to='/welcome' />
            <Route path="/dashboard" component={LazyDashboard} />
            <Route 
              path={['/welcome', '/welcome/signin', '/welcome/signup']} 
              render={(props) => 
                <LazyWelcome {...props} onSignin={this.handleSignin} /> }
            />
            {/* FIXME when we have state.user */}
            <Route component={LazyMy404} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

function mapStateProps ({ user }) {
  return {
    user,
    loading: user === null
  }
}

export default connect(mapStateProps)(App);
