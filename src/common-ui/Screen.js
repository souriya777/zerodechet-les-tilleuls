import React from 'react'

import TransitionWrapper from '../utils/TransitionWrapper'

const Screen = ({ children }) => 
  <TransitionWrapper>
    <div className='screen'>
      { children }
    </div>
  </TransitionWrapper>

export default Screen
