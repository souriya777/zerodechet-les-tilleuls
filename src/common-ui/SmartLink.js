import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const SmartLink = ({route, location, children}) => {
  const selected = location.pathname === route
    ? 'link--selected'
    : 'link--unselected'
  
  return (
    <Link className={`link ${selected}`} to={route}>{children}</Link>
  )
}

export default withRouter(SmartLink)