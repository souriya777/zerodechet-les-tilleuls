import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import InputPretty from '../common-ui/InputPretty'
import IconUser from '../common-ui/IconUser'
import IconLock from '../common-ui/IconLock'

class Signin extends Component {

  state = {
    email: null,
    pwd: null,
    formValid: false
  }

  render () {
    return (
      <div className="signin">
        <div className='signin__inputs'>
          <InputPretty placeholder='Email'>
            <IconUser />
          </InputPretty>
          <InputPretty placeholder='Mot de passe' type='password'>
            <IconLock />
          </InputPretty>
        </div>

        <div className="signin__action">
          <Link className='btn btn--raised u-margin-bottom-small' to={ROUTES.welcome + ROUTES.signin}>Se connecter</Link>
          <Link className='btn' to={ROUTES.welcome + ROUTES.signup}>S'inscrire</Link>
        </div>
      </div>
    )
  }
}

export default Signin