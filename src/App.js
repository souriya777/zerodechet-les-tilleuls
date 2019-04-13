import React, { Component } from 'react';
import { 
  Route,
  Link, 
  Switch
   } from 'react-router-dom';

import './sass/main.scss';

import Loading from './pages/Loading';

const LazyWelcome = React.lazy(() => import('./components/Welcome'));
const LazySignin = React.lazy(() => import('./components/Signin'));
const LazySignup = React.lazy(() => import('./components/Signup'));

// TODO error handling
// TODO state management

class App extends Component {
  render() {
    return (
      <div className="spa-container">
        <div className='form--absolute'>
          <Link className='btn btn--ghost welcome__btn' to="/signin">Se connecter</Link>
          <Link className='btn btn--full welcome__btn' to="/signup">Créer un profil</Link>
        </div>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={LazyWelcome} />
            <Route path="/signin" component={LazySignin} />
            <Route path="/signup" component={LazySignup} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default App;
