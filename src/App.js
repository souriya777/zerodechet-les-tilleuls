import React, { Component } from 'react';
import { 
  Route,
  Switch } from 'react-router-dom';

import './sass/main.scss';

import Loading from './components/Loading';

const LazyWelcome = React.lazy(() => import('./pages/Welcome'));
const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));

// TODO error handling
// TODO state management

class App extends Component {
  state = {
    user: null,
  }

  render() {
    return (
      <>
        <div className="dev-info">
          React v{React.version}
        </div>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route 
              path="/dashboard" 
              component={LazyDashboard}
            />
            <Route 
              path="/" 
              render={(props) => <LazyWelcome {...props} /> }
            />
          </Switch>
        </React.Suspense>
      </>
    );
  }
}

export default App;
