import React from 'react'

const Hr = ({children}) =>
  <div className='hr'>
    <div className="hr__left">&nbsp;</div>
    <div className="hr__content">{children}</div>
    <div className="hr__right">&nbsp;</div>
  </div>

export default Hr