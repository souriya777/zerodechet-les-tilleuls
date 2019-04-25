import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import Button from '../common-ui/Button'
import InputPretty from '../common-ui/InputPretty'
import { COLOR_FB, COLOR_G } from '../utils/color-utils'

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
        <Button icon={IconFacebook} color={COLOR_FB}>Connexion avec Facebook</Button>
        <Button icon={IconGoogle} color={COLOR_G}>Connexion avec Google</Button>
      </div>

      <SeparatorOr />

      <div className="content__border-box content__grid">
        <InputPretty 
          type='email'
          placeholder='e-mail'><IconUser /></InputPretty>

        <InputPretty 
          type='password'
          placeholder='mot de passe'><IconLock /></InputPretty>

        <a href='#' className='link' to={ROUTES.signupChoice}>
          <Button raised={true}>Connexion</Button>
        </a>
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