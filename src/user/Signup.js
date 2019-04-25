import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import IconMail from '../common-ui/IconMail'
import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'
import Button from '../common-ui/Button'
import InputPretty from '../common-ui/InputPretty'
import { COLOR_FB, COLOR_G } from '../utils/color-utils'

const BTN_LABEL = 'Inscription'

export const SignupHeader = () => {

  return (
    <div className="signup__header">
      <h1 className='h1'>Inscription</h1>
      <p>Faites partie d'une communauté d'aventuriers oeuvrant pour la planète</p>
    </div>
  )
}

export const SignupContent = () => (
  <div className="signup__content">

    <div className="content__border-box signup__actions">
      Inscrivez-vous avec <a href='#' className='link link--active' to={ROUTES.signup}>Facebook</a> ou <a href='#' className='link link--active' to={ROUTES.signup}>Google</a>
    </div>

    <SeparatorOr />

    <div className="content__border-box content__grid">

      <InputPretty 
        type='text'
        placeholder='prénom'><IconUser /></InputPretty>
    
      <InputPretty 
        type='text'
        placeholder='nom'><IconUser /></InputPretty>

      <InputPretty 
        type='email'
        placeholder='e-mail'><IconMail /></InputPretty>

      <InputPretty 
        type='password'
        placeholder='mot de passe'><IconLock /></InputPretty>

      <a href='#' className='link'>
        <Button raised={true}>{BTN_LABEL}</Button>
      </a>
    </div>

    <div className='signup__other'>
      <div className='asterix'>
        En cliquant sur {BTN_LABEL}, j'accepte les <Link className='link link--active' to={ROUTES.terms}>Conditions générales</Link> de Zéro Déchet.
      </div>
    </div>

  </div>
)