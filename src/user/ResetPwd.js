import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Form from '../common-ui/Form';
import FormInput from '../common-ui/FormInput'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';
import { handleResetPwd } from '../user/userActions'

// FIXME container-component
class ResetPwd extends Component {

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
    this.props.dispatch(handleResetPwd(email))
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

const mapStateToProps = state => {
  return {
    error: state.error
  }
}
export default connect(mapStateToProps)(ResetPwd);