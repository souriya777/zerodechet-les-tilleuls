import React from 'react'
import Carousel from 'nuka-carousel'
import { PagingDots } from 'nuka-carousel'

import Logo from '../common-ui/Logo'

const SlideList = ({ children }) => (
  <div className='slide'>
    <div className='slide__logo'>
      <Logo />
    </div>
    
    <div className='slide__content'>
      <Carousel
        enableKeyboardControls={true}
        transitionMode='scroll'
        vertical={true}
        renderCenterLeftControls={null}
        renderBottomCenterControls={null}
        renderCenterRightControls={props => <PagingDots {...props} />}
      >
        {children}
      </Carousel>
    </div>
  </div>
)

export default SlideList