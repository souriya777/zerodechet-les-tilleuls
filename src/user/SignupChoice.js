import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import { handleSigninWithFacebook, handleSigninWithGoogle } from './userActions'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import IconMail from '../common-ui/IconMail'
import Button from '../common-ui/Button'
import { COLOR_FB, COLOR_G } from '../utils/color-utils'

class SignupChoice extends Component {

  handleSubmitGoogle = () => {
    this.props.dispatch(handleSigninWithGoogle())
  }

  handleSubmitFacebook = () => {
    this.props.dispatch(handleSigninWithFacebook())
  }

  render () {
    return (
      <div className="signup-choice__content">

        <div className="signup-choice__actions content__grid">
          <Button 
            icon={IconFacebook} 
            color={COLOR_FB}
            onSubmit={this.handleSubmitFacebook} >
              Connexion avec Facebook
          </Button>
          <Button 
            icon={IconGoogle} 
            color={COLOR_G}
            onSubmit={this.handleSubmitGoogle}>
              Connexion avec Google
          </Button>
          
          <Link className='link' to={ROUTES.signup}>
            <Button icon={IconMail}>Inscription par e-mail</Button>
          </Link>
        </div>

        <div className='signup-choice__other'>
          <div className='asterix asterix--center'>
            Vous avez déjà un compte Zéro Déchet? <Link className='link link--active' to={ROUTES.signin}>Connexion</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default connect()(SignupChoice)