import React from 'react'
import { withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from "react-transition-group"

const TransitionWrapper = ({ children, effect = 'fade', location}) => 
    <TransitionGroup> 
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames={effect}
      >
        {children}
      </CSSTransition>
    </TransitionGroup> 

export default withRouter(TransitionWrapper)
