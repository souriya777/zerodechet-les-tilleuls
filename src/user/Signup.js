import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ROUTES from '../app/routes'
import Form from '../common-ui/Form';
import FormInput from '../common-ui/FormInput'
import Asterix from '../common-ui/Asterix';
import { getValueFrom } from '../utils/form-utils';
import { withFirebase } from '../app/firebase'

const Signup = () => (<SignupForm />)

class SignupFormBase extends Component {

  state = {
    name: null,
    email: null,
    pwd: null,
    formValid: false,

    // FIXME with error handling
    error: '',
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

    // TODO dispatch an action
    console.log(name, email, pwd);
    try {
      const { user } = await this.props.firebase.signup(email, pwd)
      console.log(user.uid);
      this.setState({error: ''})
    } catch(error) {
      console.log(error.message);
      // TODO msg in french
      this.setState({error: error.message})
    }
  }

  render () {
    return (
      <Form 
        title='Créer un profil'
        submitLabel='Réduire mes déchets'
        error={this.state.error}
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
          <Asterix>Déjà un compte?<br /><Link className='link' to={ROUTES.welcome + ROUTES.signin}>Se connecter</Link></Asterix>
        }
        onSubmit={this.handleSubmit} />
    )
  }
}

const SignupForm = withFirebase(SignupFormBase)

export default Signup;