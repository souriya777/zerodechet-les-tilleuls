import React from 'react'

import User from './User'
import MenuItems from './MenuItems'

const Menu = (props) => {
  
  return (
    <nav className='menu'>
      <User {...props} />
      <ul className='menu__list'>
        <MenuItems {...props}  />
      </ul>
    </nav>
  )
}

export default Menu;