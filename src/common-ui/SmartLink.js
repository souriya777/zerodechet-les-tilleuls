import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const SmartLink = ({to, location, children}) => {
  const selected = location.pathname === to
    ? 'link--selected'
    : 'link--unselected'
  
  return (
    <Link className={`link ${selected}`} to={to}>{children}</Link>
  )
}

export default withRouter(SmartLink)