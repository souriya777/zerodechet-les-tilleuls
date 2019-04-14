import React, { Component } from 'react';
import { 
  Route,
  Switch,
  Redirect } from 'react-router-dom';

import './sass/main.scss';

import Loading from './components/Loading';
import LocationUtils from './components/LocationUtils';

const LazyWelcome = React.lazy(() => import('./pages/Welcome'));
const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));
const LazyMy404 = React.lazy(() => import('./pages/My404'));

// TODO error handling
// TODO state management

class App extends Component {
  render() {
    return (
      <>
        <div className="dev-info">
          React v{React.version}
          <Route path='/' component={LocationUtils} />
        </div>

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from='/' to='/welcome' />
            <Route path="/dashboard" 
              component={LazyDashboard}
            />
            <Route 
              path={['/welcome', '/welcome/signin', '/welcome/signup']} 
              render={(props) => 
                <LazyWelcome {...props} onSignin={this.handleSignin} /> }
            />
            {/* FIXME when we have state.user */}
            <Route component={LazyMy404} />
          </Switch>
        </React.Suspense>
      </>
    );
  }
}

export default App;
