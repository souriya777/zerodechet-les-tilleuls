import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import Form from '../common-ui/Form';
import FormInput from '../common-ui/FormInput'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';

// FIXME container-component
class ForgottenPwd extends Component {

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
    // const email = this.state.email;
    console.log('handlesubmit')
    this.setState({formValid: true})
  };

  render () {
    if (this.state.formValid === true) {
      return <Redirect to='/dashboard' />
    }

    return (
      <Form 
        title='Mot de passe oublié'
        submitLabel={`M'aider`}
        inputs={
          <>
            <FormInput id='email' label='E-mail' type='email' handleInputChange={this.handleInputChange} />
          </>
        }
        asterixTop={
          <Asterix>Une procédure pour obtenir un nouveau mot de passe vous sera envoyé sur votre email.</Asterix>
        }
        asterixBottom={
          <Asterix>Déjà un compte?<br /><Link className='link' to='/welcome/signin'>Se connecter</Link></Asterix>
        }
        onSubmit={this.handleSubmit} />
    );
  }
};

export default ForgottenPwd;