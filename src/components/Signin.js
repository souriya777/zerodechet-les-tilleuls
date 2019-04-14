import React from 'react'
import { Link } from 'react-router-dom';

import Form from './Form';
import Asterix from './Asterix';

// FIXME is it in right place?
const title = 'Se connecter';
const action = 'dashboard'; // FIXME factorize
const submitLabel = 'Fait!';
const fields = [
  {id: 'email', label: 'E-mail', type: 'email'},
  {id: 'pwd', label: 'Mot de passe', type: 'password'}
];

// FIXME move
const handleSubmit = (props, formValues) => {
  // 0: {email: "laosoupi59@gmail.com"}
  // 1: {pwd: "d"}
  const email = formValues['email'];
  const pwd = formValues['pwd'];

  props.onSubmit(email, pwd);
};

const Signin = (props) => {
  const path = props.match.path;

  return (
    <div className='signin'>
      <div className="card">
        <Form 
          onSubmit={handleSubmit.bind(this, props)}
          title={title}
          action={action}
          submitLabel={submitLabel}
          fields={fields}
          asterixTop={
            <Asterix><Link className='link' to='/forgotten-pwd'>Mot de passe oublié</Link></Asterix>
          }
          asterixBottom={
            <Asterix>Pas encore de compte?<br /><Link className='link' to={`${path}/signup`}>Créer un profil</Link></Asterix>
          } />
      </div>
    </div>
  );
};

export default Signin;