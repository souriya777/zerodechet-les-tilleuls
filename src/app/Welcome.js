import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from './routes'
import Logo from './Logo'

export const WelcomeHeader = () => {
  return (
    <div className='welcome__header content__grid'>
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

      <div className='welcome__actions content__grid'>
        <Link className='btn btn--raised' to={ROUTES.signin}>Connexion</Link>
        <Link className='btn btn--raised' to={ROUTES.signupChoice}>Inscription</Link>
      </div>

    </div>
  )
}