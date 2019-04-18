import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Form from '../common-ui/Form';
import FormInput from '../common-ui/FormInput'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';
import { handleSignin } from '../user/userActions'

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
    this.props.dispatch(handleSignin(email, pwd))
  };

  render () {
    const { user } = this.props
    console.log(this.props);
    console.log(this.state);
    
    if (user !== null) {
      console.log('FormSignin-redirect');
      
      // return <Redirect to='/dashboard' />
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(FormSignin);