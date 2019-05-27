import React from 'react'

import WelcomeSlideList from './WelcomeSlideList'
import Logo from '../common-ui/Logo'

const Welcome = () => (
  <div className='welcome'>

    <div className='welcome__logo'>
      <Logo />
    </div>

    <div className='welcome__slideList'>
      <WelcomeSlideList />
    </div>
  </div>
)

export default Welcome