import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import Form from './Form';
import FormInput from './FormInput'
import Asterix from './Asterix';
import { signinUser } from '../_resources/js/user-api';
import { getValueFrom } from '../_resources/js/form-utils';

class FormSignin extends Component {

  state = {
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
    const email = this.state.email;
    const pwd = this.state.pwd;

    const signinOK = await signinUser(email, pwd);
    if (signinOK === true) {
      this.setState({ formValid: true});
    }
  };

  render () {
    if (this.state.formValid === true) {
      return <Redirect to='/dashboard' />
    }

    return (
      <Form 
        title='Se connecter'
        submitLabel='Fait!'
        inputs={
          <>
            <FormInput id='email' label='E-mail' type='email' handleInputChange={this.handleInputChange} />
            <FormInput id='pwd' label='Mot de passe' type='password' handleInputChange={this.handleInputChange} />
          </>
        }
        asterixTop={
          <Asterix><Link className='link' to='/forgotten-pwd'>Mot de passe oublié</Link></Asterix>
        }
        asterixBottom={
          <Asterix>Pas encore de compte?<br /><Link className='link' to='/welcome/signup'>Créer un profil</Link></Asterix>
        } 
        onSubmit={this.handleSubmit} />
    );
  }
};

export default FormSignin;