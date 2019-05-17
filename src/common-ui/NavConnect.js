import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
import SVGUser from './svg/SVGUser'

const NavConnect = ({ location }) => {

  const connectStatus = location.pathname === ROUTES.tuto 
    ? 'init' 
    : 'active'

  const [foregnd, setForegnd] = useState('')

  useEffect(() => {
    if (
      ROUTES.signin ===  location.pathname ||
      ROUTES.signup === location.pathname
    ) {
      setForegnd('nav__connect--backgnd')
    } else {
      setForegnd('')
    }
  })

  return (
    <>
      <Link to={ROUTES.signin}>
        <div className={`nav__connect nav__connect--${connectStatus} ${foregnd}`}>
          <div className='nav__connect-content'>
            <SVGUser />
          </div>
        </div>
      </Link>

      <Link to={ROUTES.tuto}>
        <div className={`nav__close nav__close--${connectStatus}`}>
          <div className='nav__close-content'>
            X
          </div>
        </div>
      </Link>
    </>
  )
}

export default withRouter(NavConnect)