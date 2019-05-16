import React from 'react'
import { withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'

const withLightMode = (Component) => {
  // const { pathname } = location
  // console.log(Component)
  console.log(Component);
  console.log(Component.location);
  
  
  const pathname = '/stat'
  let lightMode = ''

  if (
    ROUTES.stat === pathname ||
    ROUTES.weight === pathname ||
    ROUTES.rdv === pathname ||
    ROUTES.profile === pathname
  ) {
    lightMode = '--light'
  }

  console.log(lightMode);
  

  return class extends React.Component {
    render() {
      return <div>testa</div>
      // return <Component {...this.props} lightMode={lightMode} />
    }
  }
}

export default withLightMode