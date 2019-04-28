import React from 'react';

import User from '../user/User';
import MenuItems from './MenuItems';
import IconSwitch from './IconSwitch';

const Menu = (props) => {

  return (
    <nav className='menu'>
      <User {...props} />
      <ul className='menu__list'>
        <MenuItems {...props}  />
      </ul>
      <div className='menu__logout' onClick={props.onSignout}>
        <IconSwitch className='menu__icon menu__logout--icon' />
      </div>
    </nav>
  )
}

export default Menu;