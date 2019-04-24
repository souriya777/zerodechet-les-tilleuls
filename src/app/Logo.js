import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from './routes'

const Logo = () => {
  return (
    <Link className='link' to={ROUTES.landing}>
      <div className='logo'></div>
    </Link>
  )
}

export default Logo