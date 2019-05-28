import React from 'react'

const BtnFake = ({children, onSubmit, className=''}) =>
  <div className={`btn-fake ${className}`} onClick={onSubmit}>
    {children}
  </div>

export default BtnFake
