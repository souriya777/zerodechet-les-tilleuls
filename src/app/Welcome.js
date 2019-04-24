import React from 'react'
import { Link } from 'react-router-dom';

import ROUTES from './routes'
import Logo from './Logo'
import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import ButtonRich from '../common-ui/ButtonRich'

export const WelcomeHeader = () => {
  return (
    <div className='welcome__header'>
      <div className='wecome__logo'>
        <Logo />
      </div>
      <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
    </div>
  )
}

export const WelcomeContent = () => {
  return (
    <div className='welcome'>

      <div className='welcome__actions content__border-box'>
        <Link className='btn btn--raised' to={ROUTES.signin}>Se connecter</Link>
        <Link className='btn btn--raised' to={ROUTES.signup}>S'inscrire</Link>
      </div>

      <SeparatorOr />

      <div className='welcome__shortcuts content__border-box'>
        <ButtonRich icon={IconFacebook} legend='Facebook' color='#3b5998' />
        <ButtonRich icon={IconGoogle} legend='Google' color='#dd4b39' />
      </div>

    </div>
  )
}