import React from 'react'

const WelcomeSlide = ({ title, backgnd, children }) =>
  <div className='slide'>
    <div className='welcome__wording'>
      <div className='welcome__h h--slide'>{title}</div>
      <p className='welcome__txt'>{children}</p>
    </div>
    <div className={`welcome__backgnd welcome__backgnd--${backgnd}`}></div>
  </div>

export default WelcomeSlide