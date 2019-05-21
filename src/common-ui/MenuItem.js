import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const MenuItem = ({ label, icon, linkTo, location, match }) => {
  const Icon = icon
  const size = 24
  const isActive = linkTo.startsWith(location.pathname)
    ? 'menu__item--active'
    : ''

  return (
    <li className={`menu__item ${isActive}`}>
      <Link className='link menu__link' to={linkTo}>
        <div className='menu__icon'>
          <Icon width={size} height={size} />
        </div>
        <div className='menu__label'>{label}</div>
      </Link>
    </li>
  )
}

  export default withRouter(MenuItem)