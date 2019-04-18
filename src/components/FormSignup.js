import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Form from './Form';
import FormInput from './FormInput'
import Asterix from './Asterix';
import { signupUser } from '../utils/user-api';
import { getValueFrom } from '../utils/form-utils';

class FormSignup extends Component {

  state = {
    name: null,
    email: null,
    pwd: null,
    formValid: false
  }

  // FIXME how to make it more generic?
  handleInputChange = e => {
    const {id, value} = getValueFrom(e);
    this.setState({ [id]: value });
  }

  handleSubmit = async(e) => {
    const name = this.state.name;
    const email = this.state.email;
    const pwd = this.state.pwd;

    const signupOK = await signupUser(name, email, pwd);
    if (signupOK === true) {
      this.setState({ formValid: true});
    }
  };

  render () {
    return (
      <Form 
        title='Créer un profil'
        submitLabel='Réduire mes déchets'
        inputs={
          <>
            <FormInput id='name' label='Nom' type='text' handleInputChange={this.handleInputChange} />
            <FormInput id='email' label='E-mail' type='email' handleInputChange={this.handleInputChange} />
            <FormInput id='pwd' label='Mot de passe' type='password' handleInputChange={this.handleInputChange} />
          </>
        }
        asterixTop={
          <Asterix>En vous inscrivant vous acceptez les <Link className='link' to='/terms'>termes et les conditions</Link>.</Asterix>
        }
        asterixBottom={
          <Asterix>Déjà un compte?<br /><Link className='link' to='/welcome/signin'>Se connecter</Link></Asterix>
        }
        onSubmit={this.handleSubmit} />
    );
  }
};

export default FormSignup;