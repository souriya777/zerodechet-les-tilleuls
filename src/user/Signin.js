import React from 'react'

import SeparatorOr from '../common-ui/SeparatorOr'
import IconGoogle from '../common-ui/IconGoogle'
import IconFacebook from '../common-ui/IconFacebook'
import ButtonRich from '../common-ui/ButtonRich'
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

      <div className="content__border-box">
        <ButtonRich icon={IconFacebook} color='#3b5998'>Se connecter avec Facebook</ButtonRich>
        <ButtonRich icon={IconGoogle} color='#dd4b39'>Se connecter avec Google</ButtonRich>
      </div>

      <SeparatorOr />


      <div className="content__border-box">
        e-mail
        mot de passe

        bouton Connexion
      </div>
      
      <div className='signin__other'>
        mot de passe oublié

        Vous n'avez pas de compte? Inscription
      </div>
    </div>
  )
}