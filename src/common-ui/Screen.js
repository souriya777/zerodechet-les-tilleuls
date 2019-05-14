import React from 'react'
import { withRouter } from 'react-router-dom'

import { inTuto } from '../app/routes'

const Screen = ({ location, children }) => {
  const screenOpt = inTuto(location.pathname)
    ? 'screen-tuto'
    : ''

  return (
    <div className={`screen ${screenOpt}`}>
      { children }
    </div>
  )
}

export default withRouter(Screen)
