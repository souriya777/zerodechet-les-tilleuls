import React from 'react';
import { Route, Link } from 'react-router-dom';

const LazySignin = React.lazy(() => import('../components/Signin'));
const LazySignup = React.lazy(() => import('../components/Signup'));

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
        <Route path={`${path}/signin`} render={() => 
            <LazySignin {...props} onSubmit={props.onSignin} />} 
          />
        <Route path={`${path}/signup`} component={LazySignup} />
      </div>
    </div>
  );
}

export default Welcome;