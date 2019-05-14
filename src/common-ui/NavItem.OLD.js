import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'

const NavItem = (props) => {
  const { location } = props
  const Icon = props.icon
  const Img = props.img

  const isActive = ROUTES.isActive(location.pathname, props.linkTo)
                    ? 'nav__item--active'
                    : ''
  
  return (
    <Link className='nav__link' to={props.linkTo}>
      <li className={`nav__item ${isActive}`}>
        {props.icon 
          ? <Icon className='nav__icon' />
          : <div className='nav__img'><Img /></div>
        }
        {props.label}
      </li>
    </Link>
  )
}

export default withRouter(NavItem)