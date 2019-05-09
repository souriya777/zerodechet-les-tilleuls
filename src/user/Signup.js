import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import SeparatorOr from '../common-ui/SeparatorOr'
import { handleSignup, handleSigninWithFacebook, handleSigninWithGoogle } from './userActions'
import SignupForm from './SignupForm'

export class Signup extends Component {

  handleSubmit = ({firstName, lastName, email, pwd}) => {
    this.props.dispatch(handleSignup(firstName, lastName, email, pwd))
  }

  handleSubmitGoogle = () => {
    this.props.dispatch(handleSigninWithGoogle())
  }

  handleSubmitFacebook = () => {
    this.props.dispatch(handleSigninWithFacebook())
  }

  render() {
    return (
      <>
        <div className="content__border-box signup__actions">
          Inscrivez-vous avec <span className='link link--active' onClick={this.handleSubmitFacebook}>Facebook</span> ou <span href='#' className='link link--active' onClick={this.handleSubmitGoogle}>Google</span>
        </div>

        <SeparatorOr />

        <div className="content__border-box content__grid">
          <SignupForm onSubmit={this.handleSubmit} />
        </div>

        <div className='signup__other'>
          <div className='asterix'>
            En cliquant sur Inscription, j'accepte les <Link className='link link--active' to={ROUTES.terms}>Conditions générales</Link> de Zéro Déchet.
          </div>
        </div>
      </>
    )
  }
}

export default connect()(Signup)