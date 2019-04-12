import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome__box--top'>
        <div className='logo u-margin-bottom-small'></div>
        <h1 className='heading-1 u-margin-bottom-small'>Zéro Déchet App</h1>
        <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="welcome__box--bottom">
        <Router>
          <Link className='btn btn--ghost welcome__btn' to="/signin">Se connecter</Link>
          <Link className='btn btn--full welcome__btn' to="/signup">Créer un profil</Link>

          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/* <Route exact path="/" component={Welcome} /> */}
        </Router>
      </div>
    </div>
  );
}

export default Welcome;