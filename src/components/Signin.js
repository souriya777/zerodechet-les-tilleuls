import React from 'react'
import { Link } from 'react-router-dom';

import Form from './Form';
import Asterix from './Asterix';

const Signin = () => {
  
  const title = 'Se connecter';
  const action = 'dashboard'; // FIXME factorize
  const submitLabel = 'Fait!';

  const fields = [
    {id: 'email', label: 'E-mail', type: 'email'},
    {id: 'pwd', label: 'Mot de passe', type: 'password'}
  ]

  return (
    <div className='signin'>
      <div className="card">
        <Form 
          title={title}
          action={action}
          submitLabel={submitLabel}
          fields={fields}
          asterixTop={
            <Asterix><Link className='link' to='/forgotten-pwd'>Mot de passe oublié</Link></Asterix>
          }
          asterixBottom={
            <Asterix>Pas encore de compte?<br /><Link className='link' to='/signup'>Créer un profil</Link></Asterix>
          } />
      </div>
    </div>
  );
};

export default Signin;