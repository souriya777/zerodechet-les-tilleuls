import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import Form from '../common-ui/Form';
import Input from '../common-ui/Input'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';
import { handleSignup } from './userActions'

// const Signup = () => (<SignupForm />)

// class SignupFormBase extends Component {
class Signup extends Component {

  state = {
    name: null,
    email: null,
    pwd: null,
    formValid: false,
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
    this.props.dispatch(handleSignup(name, email, pwd))
}

render () {
  // FIXME duplicate code
  const { user } = this.props
  if (user !== null && user !== undefined && user.uid !== undefined) {
    console.log('Signup-redirect');
    return <Redirect to='/dashboard' />
  }
  
    // TODO factorize
    const { error } = this.props;
    const errorMsg = (error !== null && error !== undefined && error.errorMsg !== undefined)
      ? error.errorMsg
      : ''

    return (
      <Form 
        title='Créer un profil'
        submitLabel='Réduire mes déchets'
        error={errorMsg}
        inputs={
          <>
            <Input id='name' label='Nom' type='text' handleInputChange={this.handleInputChange} />
            <Input id='email' label='E-mail' type='email' handleInputChange={this.handleInputChange} />
            <Input id='pwd' label='Mot de passe' type='password' handleInputChange={this.handleInputChange} />
          </>
        }
        asterixTop={
          <Asterix>En vous inscrivant vous acceptez les <Link className='link' to='/terms'>termes et les conditions</Link>.</Asterix>
        }
        asterixBottom={
          <Asterix>Déjà un compte?<br /><Link className='link' to={ROUTES.welcome + ROUTES.signin}>Se connecter</Link></Asterix>
        }
        onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Signup)