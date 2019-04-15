import React from 'react';

import User from './User';
import MenuItems from './MenuItems';
import IconSwitch from './icons/IconSwitch';

const Menu = (props) => {
  
  return (
    <nav className='menu'>
      <User {...props} />
      <ul className='menu__list'>
        <MenuItems {...props}  />
      </ul>
      <div className='menu__logout'>
        <IconSwitch className='menu__icon menu__logout--icon' />
      </div>
    </nav>
  )
}

export default Menu;