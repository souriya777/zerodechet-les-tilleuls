import React from 'react'

import TutoSlideList from './TutoSlideList'
import Logo from '../common-ui/Logo'
import SVGBonhomme from '../common-ui/svg/SVGBonhomme'

const Tuto = () => (
  <div className='tuto'>

    <div className='tuto__logo'>
      <Logo />
    </div>

    <div className='tuto__slideList'>
      <TutoSlideList />
    </div>

    <div className='tuto__login'>
      <SVGBonhomme />
    </div>

  </div>
)

export default Tuto