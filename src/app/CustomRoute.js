import React from 'react'
import { Route } from 'react-router-dom'

const CustomRoute = ({ component: Component, path, ...rest}) => {
  return (
    <Route 
      path={path}
      render={() => <Component {...rest} />}
    />
  )
}   

export default CustomRoute