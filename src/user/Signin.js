import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import Form from '../common-ui/Form';
import FormInput from '../common-ui/FormInput'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';
import { handleSignin } from '../user/userActions'

// FIXME container-component
class Signin extends Component {

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
    
    if (user !== null && user !== undefined && user.uid !== undefined) {
      console.log('Signin-redirect');
      
      return <Redirect to='/dashboard' />
    }

    // TODO factorize
    const { error } = this.props;
    const errorMsg = (error !== null && error !== undefined && error.errorMsg !== undefined)
      ? error.errorMsg
      : ''

    return (
      <Form 
        title='Se connecter'
        submitLabel='Fait!'
        error={errorMsg}
        inputs={
          <>
            <FormInput id='email' label='E-mail' type='email' handleInputChange={this.handleInputChange} />
            <FormInput id='pwd' label='Mot de passe' type='password' handleInputChange={this.handleInputChange} />
          </>
        }
        asterixTop={
          <Asterix><Link className='link' to={ROUTES.welcome + ROUTES.resetPwd}>Mot de passe oublié</Link></Asterix>
        }
        asterixBottom={
          <Asterix>Pas encore de compte?<br /><Link className='link' to={ROUTES.welcome + ROUTES.signup}>Créer un profil</Link></Asterix>
        } 
        onSubmit={this.handleSubmit} />
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps)(Signin);