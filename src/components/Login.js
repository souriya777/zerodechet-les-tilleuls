import React from 'react';

const Login = () => {
  return (
    <div className='login'>

      <div className='login__box--top'>
        <div className='logo u-margin-bottom-small'></div>
        <h1 className='heading-1 u-margin-bottom-small'>Zéro Déchet App</h1>
        <p className='why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="login__box--bottom">
        <a className='btn btn--ghost login__btn' href="#">Se connecter</a>
        <a className='btn btn--full login__btn' href="#">Créer un profil</a>
      </div>

    </div>
  );
}

export default Login;