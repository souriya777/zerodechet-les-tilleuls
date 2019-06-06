import React from 'react'

import UserResetPwdForm from './UserResetPwdForm'
import BackgndHelper from '../utils/BackgndHelper'

const UserResetPwd = () => 
  <>
    <BackgndHelper />

    <div className='reset-pwd'>
      <p className='reset-pwd__wording'>
        Saisissez l'e-mail associé à votre compte. Nous vous enverrons un lien par e-mail pour réinitialiser votre mot de passe.
      </p>
      <div className='reset-pwd__form'>
        <UserResetPwdForm />
      </div>
    </div>
  </>

export default UserResetPwd