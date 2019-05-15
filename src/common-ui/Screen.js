import React from 'react'
import { withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'

const Screen = ({ location, children }) => {
  const screenOpt = location.pathname === ROUTES.tuto
    ? 'screen-tuto'
    : ''

  return (
    <div className={`screen ${screenOpt}`}>
      { children }
    </div>
  )
}

export default withRouter(Screen)
