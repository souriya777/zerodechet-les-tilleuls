import React, { Component } from 'react';
import { 
  Route,
  Switch } from 'react-router-dom';

import './sass/main.scss';

import Loading from './pages/Loading';
import FormRouter from './components/FormRouter';

const LazyWelcome = React.lazy(() => import('./components/Welcome'));

// TODO error handling
// TODO state management

class App extends Component {
  render() {
    console.log(this.props);
    

    return (
      <div className="spa-container">
        <FormRouter.WrappedComponent />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={LazyWelcome} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
