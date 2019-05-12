import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const SmartLink = ({to, location, children}) => {
  const active = location.pathname === to
    ? 'link--active'
    : ''
  
  return (
    <Link className={`link ${active}`} to={to}>{children}</Link>
  )
}

export default withRouter(SmartLink)