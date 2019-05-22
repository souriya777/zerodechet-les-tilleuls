import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const MenuItem = ({ label, icon, route, location }) => {
  const Icon = icon
  const size = 24
  const isActive = route.startsWith(location.pathname)
    ? 'menu__item--active'
    : ''

  return (
    <li className={`menu__item ${isActive}`}>
      <Link className='link menu__link' to={route}>
        <div className='menu__icon'>
          <Icon width={size} height={size} />
        </div>
        <div className='menu__label'>{label}</div>
      </Link>
    </li>
  )
}

  export default withRouter(MenuItem)