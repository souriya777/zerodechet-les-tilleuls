import React from 'react'
import { 
  Switch,
  withRouter,
} from 'react-router-dom'

import { TransitionGroup, CSSTransition } from "react-transition-group"

const TransitionWrapper = ({ children, effect = 'fade', location}) => 
    <TransitionGroup> 
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames={effect}
      >
        <Switch location={location}>
          {children}
        </Switch>
      </CSSTransition>
    </TransitionGroup> 

export default withRouter(TransitionWrapper)
