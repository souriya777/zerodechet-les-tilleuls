import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from './routes'

const Logo = () => {
  return (
    <Link className='link--logo' to={ROUTES.landing}>
      <div className='logo u-margin-bottom-small'></div>
    </Link>
  )
}

export default Logo