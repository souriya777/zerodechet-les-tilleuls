import React from 'react'

import Logo from './Logo'

const Header = ({ smallMode }) => {
  const smallActive = smallMode
    ? 'header--small'
    : ''
  
  
  return (
    <header className={`header ${smallActive}`}>
      <div className='header__logo'>
        <Logo />
      </div>
    </header>
  )
}

export default Header