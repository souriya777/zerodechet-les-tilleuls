import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import IconMail from '../common-ui/IconMail'
import Button from '../common-ui/Button'
import { COLOR_FB, COLOR_G } from '../utils/color-utils'

export const SignupChoiceContent = () => (
  <div className="signup-choice__content">

    <div className="signup-choice__actions content__grid">
      <Button icon={IconFacebook} color={COLOR_FB}>Inscription avec Facebook</Button>
      <Button icon={IconGoogle} color={COLOR_G}>Inscription avec Google</Button>
      
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