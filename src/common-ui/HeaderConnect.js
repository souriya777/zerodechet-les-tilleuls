import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import Logo from './Logo'

const HeaderConnect = () => {
  return (
    <Link className='link' to={ROUTES.landing}>
      <div className='header-connect'>
        <div className="header-connect__ellipse">
          <Logo />
        </div>
      </div>
    </Link>
  )
}

export default HeaderConnect