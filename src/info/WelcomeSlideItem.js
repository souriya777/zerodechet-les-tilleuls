import React from 'react'

const WelcomeSlide = ({ title, backgnd, children }) =>
  <div className='slide'>
    <div className='welcome__wording'>
      <h1 className='h1'>{title}</h1>
      <p className='welcome__txt'>{children}</p>
    </div>
    <div className={`welcome__backgnd welcome__backgnd--${backgnd}`}></div>
  </div>

export default WelcomeSlide