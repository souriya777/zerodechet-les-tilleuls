import React, { Component } from 'react';
import { 
  Route,
  Switch,
  Redirect } from 'react-router-dom';

import './sass/main.scss';

import Loading from './components/Loading';
import LocationUtils from './components/LocationUtils';

import { signinUser } from './api/UserApi';

const LazyWelcome = React.lazy(() => import('./pages/Welcome'));
const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));
const LazyMy404 = React.lazy(() => import('./pages/My404'));

// TODO error handling
// TODO state management

class App extends Component {
  state = {
    user: null,
  }

  handleSignin = async (user, pwd) => {
    const authenticatedOK = await signinUser(user, pwd);
    if (authenticatedOK === true) {
      this.setState({ user: 'souriya' })
    }
  }

  render() {
    const user = this.state.user;

    if (user !== null) {
      return <Redirect to='/testa' />
    }

    return (
      <>
        <div className="dev-info">
          React v{React.version}
          <Route path='/' component={LocationUtils} />
        </div>

        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route 
              path="/dashboard" 
              component={LazyDashboard}
            />
            <Route 
              path="/welcome" 
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
