import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import Button from '../common-ui/Button'
import Logo from '../common-ui/Logo'

export const UserWelcomeHeader = () => {
  return (
    <div className='welcome__header content__grid'>
      <div className='wecome__logo'>
        <Logo />
      </div>
      <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
    </div>
  )
}

export const UserWelcomeContent = () => {
  return (
    <div className='welcome'>

      <div className='welcome__actions content__grid'>
        <Link className='link' to={ROUTES.signin}>
          <Button raised={true}>Connexion</Button>
        </Link>
        <Link className='link' to={ROUTES.signupChoice}>
          <Button raised={true}>Inscription</Button>
        </Link>
      </div>

    </div>
  )
}