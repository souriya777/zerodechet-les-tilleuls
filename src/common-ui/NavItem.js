import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

// FIXME optimization : photo url in cache???
const NavItem = (props) => {
  const { location } = props
  const Icon = props.icon
  const Img = props.img

  const isSelected = location.pathname === props.linkTo;
  
  return (
    <Link className='nav__link' to={props.linkTo}>
      <li className={`nav__item ${isSelected ? 'nav__item--active' : ''}`}>
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