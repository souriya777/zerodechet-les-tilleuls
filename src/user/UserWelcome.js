import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import Button from '../common-ui/Button'

const UserWelcome = () => {
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

export default UserWelcome