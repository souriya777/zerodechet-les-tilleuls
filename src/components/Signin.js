import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import Form from './Form';
import Asterix from './Asterix';
import { signinUser } from '../api/UserApi';

class Signin extends Component {

  // FIXME is it in right place?
  title = 'Se connecter';
  action = 'dashboard'; // FIXME factorize
  submitLabel = 'Fait!';
  fields = [
    {id: 'email', label: 'E-mail', type: 'email'},
    {id: 'pwd', label: 'Mot de passe', type: 'password'}
  ];

  state = {
    toDashboard: false
  }

  handleSubmit = async formValues => {
    // 0: {email: "laosoupi59@gmail.com"}
    // 1: {pwd: "d"}
    const email = formValues['email'];
    const pwd = formValues['pwd'];

    const authenticatedOK = await signinUser(email, pwd);
    if (authenticatedOK === true) {
      this.setState({ toDashboard: true});
    }
  };

  render () {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className='signin'>
        <div className="card">
          <Form 
            onSubmit={this.handleSubmit}
            title={this.title}
            action={this.action}
            submitLabel={this.submitLabel}
            fields={this.fields}
            asterixTop={
              <Asterix><Link className='link' to='/forgotten-pwd'>Mot de passe oublié</Link></Asterix>
            }
            asterixBottom={
              <Asterix>Pas encore de compte?<br /><Link className='link' to='/welcome/signup'>Créer un profil</Link></Asterix>
            } />
        </div>
      </div>
    );
  }
};

export default Signin;