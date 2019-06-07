import React from 'react'

import SlickWrapper from '../utils/SlickWrapper'

const SlideList = ({ children }) => (
  <div className='slide'>
    <div className='slide__content'>
      <SlickWrapper>
        {children}
      </SlickWrapper>
    </div>
  </div>
)

export default SlideList