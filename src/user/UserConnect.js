import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import SmartLink from '../common-ui/SmartLink'
import UserSigninForm from './UserSigninForm'
import UserSignupForm from './UserSignupForm'
import Hr from '../common-ui/Hr'
import SVGFacebook from '../common-ui/svg/SVGFacebook'
import SVGTwitter from '../common-ui/svg/SVGTwitter'
import SVGGoogle from '../common-ui/svg/SVGGoogle'
import BtnFake from '../common-ui/BtnFake'

import { handleSigninWithFacebook, handleSigninWithGoogle, handleSigninWithTwitter } from '../user/userActions'

class UserConnect extends Component {
  handleSubmitGoogle = () => {
    this.props.dispatch(handleSigninWithGoogle())
  }

  handleSubmitFacebook = () => {
    this.props.dispatch(handleSigninWithFacebook())
  }

  handleSubmitTwitter = () => {
    this.props.dispatch(handleSigninWithTwitter())
  }


  render() {
    return (
      <div className='connect'>
        <div className='connect__choice'>
          <ul className='connect__choice-list'>
            <li className='connect__choice-item'>
              <SmartLink route={ROUTES.signin}>me connecter</SmartLink>
            </li>
            <li className='connect__choice-item'>
              <SmartLink route={ROUTES.signup}>créer un compte</SmartLink>
            </li>
          </ul>
        </div>
        <div className='connect__form'>
          <Route path={ROUTES.signin} component={UserSigninForm} />
          <Route path={ROUTES.signup} component={UserSignupForm} />
        </div>
        <div className='connect__hr'>
          <Hr>ou bien avec</Hr>
        </div>
        <div className='connect__social'>
          <BtnFake onSubmit={this.handleSubmitFacebook}>
            <SVGFacebook />
          </BtnFake>
          <BtnFake onSubmit={this.handleSubmitGoogle}>
            <SVGGoogle />
          </BtnFake>
          {/* FIXME BETA */}
          {/* <BtnFake onSubmit={this.handleSubmitTwitter}>
            <SVGTwitter />
          </BtnFake> */}
        </div>
      </div>
    )
  }
}

export default connect()(UserConnect)