import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link } from 'react-router-dom';

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

      {/* FIXME delete? */}
      <div className="welcome__box--bottom">
      </div>
    </div>
  );
}

export default Welcome;