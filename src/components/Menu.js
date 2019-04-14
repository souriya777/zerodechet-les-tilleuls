import React from 'react'

import User from './User'
import MenuItems from './MenuItems'

const Menu = () => {
  return (
    <nav className='menu'>
      <User />
      <ul className='menu__list'>
        <MenuItems />
      </ul>
    </nav>
  )
}

export default Menu;