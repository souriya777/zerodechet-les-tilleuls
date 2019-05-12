import React from 'react'

import ROUTES from '../app/routes'
import SmartLink from '../common-ui/SmartLink'
import UserSigninForm from './UserSigninForm'

// TODO
// 2/ mettre en place le formulaire
// 3/ le HR 'ou bien avec'
// 4/ les liens sociaux

const UserConnect = () => {
  return (
    <div className='connect'>
      <div className='connect__choice'>
        <ul className='connect__choice-list'>
          <li className='connect__choice-item'>
            <SmartLink to={ROUTES.signin}>me connecter</SmartLink>
          </li>
          <li className='connect__choice-item'>
            <SmartLink to={ROUTES.signup}>créer un compte</SmartLink>
          </li>
        </ul>
      </div>
      <div className='connect__form'>
        <UserSigninForm />
      </div>
      <div className='connect__hr'>
        ou bien avec
      </div>
      <div className='connect__social'>
        facebook insta g+
      </div>
    </div>
  )
}

export default UserConnect