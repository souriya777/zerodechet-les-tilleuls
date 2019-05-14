import React from 'react'

import TutoSlideList from './TutoSlideList'
import Logo from '../common-ui/Logo'

const Tuto = () => (
  <div className='tuto'>

    <div className='tuto__logo'>
      <Logo />
    </div>

    <div className='tuto__slideList'>
      <TutoSlideList />
    </div>
  </div>
)

export default Tuto