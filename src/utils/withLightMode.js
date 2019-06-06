import React from 'react'
import { withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'

function withLightMode (WrappedComponent) {
  return withRouter((props) => {
    const { location } = props

    let lightMode = ''
    if (
      ROUTES.stat.startsWith(location.pathname) ||
      ROUTES.weight.startsWith(location.pathname) ||
      ROUTES.rdv.startsWith(location.pathname) ||
      ROUTES.profile.startsWith(location.pathname)
    ) {
      lightMode = 'content--light'
    }
    
    return <WrappedComponent lightMode={lightMode} {...props} />
  })
}

export default withLightMode