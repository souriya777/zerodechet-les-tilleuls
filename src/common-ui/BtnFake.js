import React from 'react'

const BtnFake = ({children, onSubmit}) =>
  <div className='btn-fake' onClick={onSubmit}>
    {children}
  </div>

export default BtnFake
