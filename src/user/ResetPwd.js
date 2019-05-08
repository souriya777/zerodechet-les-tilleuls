import React from 'react'

import IconMail from '../common-ui/icons/IconMail'
import InputPretty from '../common-ui/InputPretty'
import Button from '../common-ui/Button'

export const ResetPwdHeader = () => (
  <div className="reset-pwd__header">
    <h1 className='h1'>Réinitialiser le mot de passe</h1>
    <p>Saisissez l'e-mail asocié à votre compte. Nous vous enverrons un lien par e-mail pour réinitialiser votre mot de passe</p>
  </div>
)

export const ResetPwdContent = () => (
  <div className="reset-pwd__content">
    <div className="content__grid">
      <InputPretty 
        type='email'
        placeholder='e-mail'
        icon={<IconMail />}
      />
      
      <span className='link'><Button raised={true} lgTxt={true}>Envoyer le lien de réinitialisation</Button></span>
    </div>
  </div>
)