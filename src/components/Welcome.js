import React from 'react';
import { 
  Route, 
  Switch } from 'react-router-dom';

import Loading from '../pages/Loading';
const LazySignin = React.lazy(() => import('./Signin'));
const LazySignup = React.lazy(() => import('./Signup'));



const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome__box--top'>
        <div className='logo u-margin-bottom-small'></div>
        <h1 className='heading-1 u-margin-bottom-small'>Zéro Déchet App</h1>
        <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="welcome__box--bottom">
        {/* FIXME factorize */}
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/signin" component={LazySignin} />
            <Route path="/signup" component={LazySignup} />
          </Switch>
        </React.Suspense>
      </div>
    </div>
  );
}

export default Welcome;