import React from 'react'
import { withRouter } from 'react-router-dom'

import TransitionWrapper from '../utils/TransitionWrapper'

const Screen = ({ children, location }) => {
  return (<>
    <TransitionWrapper>
      <div className={`screen`}>
        { children }
      </div>
    </TransitionWrapper></>
  )
}

export default withRouter(Screen)
