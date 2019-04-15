import React from 'react';
import { Route, Link } from 'react-router-dom';

import Card from '../components/Card';

const FormSignin = React.lazy(() => import('../components/FormSignin'));
const FormSignup = React.lazy(() => import('../components/FormSignup'));

const Welcome = (props) => {
  const path = props.match.path;

  return (
    <div className='spa-container welcome'>
      <div className='welcome__box--top'>
        <Link className='link--logo' to='/'>
         <div className='logo u-margin-bottom-small'></div>
        </Link>
        <h1 className='heading-1 u-margin-bottom-small'>Zéro Déchet App</h1>
        <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="welcome__box--bottom">

        <Route exact path={path} render={() =>
          <>
            <Link className='btn btn--ghost' to={`${path}/signin`}>Se connecter</Link>
            <Link className='btn btn--primary' to={`${path}/signup`}>Créer un profil</Link>
          </>
          }
        />
        <Route path={`${path}/signin`} component={FormSignin} />
        <Route path={`${path}/signup`} component={FormSignup} />
      </div>
    </div>
  );
}

export default Welcome;