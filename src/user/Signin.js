import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import IconUser from '../common-ui/IconUser'
import ButtonRich from '../common-ui/ButtonRich'
import InputPretty from '../common-ui/InputPretty'
export const SigninHeader = () => {

  return (
    <div className="signin__header">
      <h1 className='h1'>Heureux de vous revoir !</h1>
    </div>
  )
}

export const SigninContent = () => {

  return (
    <div className="signin__content">

      <div className="content__border-box content__grid">
      <ButtonRich icon={IconFacebook} color='#3b5998'>Connexion avec Facebook</ButtonRich>
        <ButtonRich icon={IconGoogle} color='#dd4b39'>Connexion avec Google</ButtonRich>
      </div>

      <SeparatorOr />

      <div className="content__border-box content__grid">
        <InputPretty 
          type='email'
          placeholder='e-mail'><IconUser /></InputPretty>

        <InputPretty 
          type='password'
          placeholder='mot de passe'><IconUser /></InputPretty>

        <a href='#' className='btn btn--raised'>Connexion</a>
      </div>
      
      <div className='signin__other'>
        <div className='asterix'>
          <Link className='link' to={ROUTES.resetPwd}>Mot de passe oublié ?</Link>
        </div>
        <div className='asterix'>
          Vous n'avez pas de compte? <Link className='link' to={ROUTES.signup}>Inscription</Link>
        </div>
      </div>
    </div>
  )
}