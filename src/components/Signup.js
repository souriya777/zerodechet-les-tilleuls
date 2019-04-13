import React from 'react'
import { Link } from 'react-router-dom';

import Form from './Form';
import Asterix from './Asterix';

const Signup = () => {
  
  const title = 'Créer un profil';
  const action = 'dashboard'; // FIXME factorize
  const submitLabel = 'Réduire mes déchets';

  const fields = [
    {id: 'name', label: 'Nom', type: 'text'},
    {id: 'email', label: 'E-mail', type: 'email'},
    {id: 'pwd', label: 'Mot de passe', type: 'password'}
  ]

  return (
    <div className='signup'>
      <div className="card">
        <Form 
          title={title}
          action={action}
          submitLabel={submitLabel}
          fields={fields}
          asterixTop={
            <Asterix>En vous inscrivant vous acceptez les <Link className='link' to='/terms'>termes et les conditions</Link>.</Asterix>
          }
          asterixBottom={
            <Asterix>Déjà un compte?<br /><Link className='link' to='/signin'>Se connecter</Link></Asterix>
          } />
      </div>
    </div>
  );
};

export default Signup;