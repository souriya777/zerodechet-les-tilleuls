import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import SVGUser from './svg/SVGUser'

export const NavConnect = () =>
  <Link to={ROUTES.signin}>
    <div className={`nav__connect nav__connect--init`}>
      <div className='nav__connect-content'>
        <SVGUser />
      </div>
    </div>
  </Link>

export const NavConnectClose = () =>
  <Link to={ROUTES.tuto}>
    <div className={`nav__close nav__close--init`}>
      <div className='nav__close-content'>
        X
      </div>
    </div>
  </Link>
