import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import { handleSigninWithEmailAndPwd, handleSigninWithFacebook, handleSigninWithGoogle } from '../user/userActions'
import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/icons/IconGoogle'
import IconFacebook from '../common-ui/icons/IconFacebook'
import Button from '../common-ui/Button'
import { COLOR_FB, COLOR_G } from '../utils/color-utils'

import SigninForm from './SigninForm'

export const SigninHeader = () => (
  <div className="signin__header">
    <h1 className='h1'>Heureux de vous revoir !</h1>
  </div>
)

export class SigninContent extends Component {

  handleSubmit = ({email, pwd}) => {
    this.props.dispatch(handleSigninWithEmailAndPwd(email, pwd))
  } 

  handleSubmitGoogle = () => {
    this.props.dispatch(handleSigninWithGoogle())
  }

  handleSubmitFacebook = () => {
    this.props.dispatch(handleSigninWithFacebook())
  }

  render() {
    return (
      <div className="signin__content">

        <div className="content__border-box content__grid">
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
        </div>

        <SeparatorOr />

        <div className="content__border-box">
          <SigninForm onSubmit={this.handleSubmit} />
        </div>
        
        <div className='signin__other'>
          <div className='asterix'>
            <Link className='link link--active' to={ROUTES.resetPwd}>Mot de passe oublié ?</Link>
          </div>
          <div className='asterix'>
            Vous n'avez pas de compte? <Link className='link link--active' to={ROUTES.signupChoice}>Inscription</Link>
          </div>
        </div>
      </div>
    )
    }
}

export default connect()(SigninContent)