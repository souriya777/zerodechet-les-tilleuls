import React from 'react';
import { Route, Link } from 'react-router-dom';

const LazySignin = React.lazy(() => import('./Signin'));
const LazySignup = React.lazy(() => import('./Signup'));

const Welcome = (props) => {

  const user = props.user;

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

        {/* FIXME use API? */}
        {/* { (user === null) ? 
          : 
          null
        } */}

        <Route exact path='/' render={() =>
          <>
            <Link className='btn btn--ghost' to='/signin'>Se connecter</Link>
            <Link className='btn btn--primary' to='/signup'>Créer un profil</Link>
          </>
          }
        />
        <Route path='/signin' component={LazySignin} />
        <Route path="/signup" component={LazySignup} />
        
      </div>
    </div>
  );
}

export default Welcome;