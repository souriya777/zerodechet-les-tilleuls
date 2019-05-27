import React from 'react'

const WelcomeSlide = ({ title, txt, backgnd }) =>
  <div className='welcome__slide'>
    <div className='welcome__wording'>
      <div className='h--slide'>{title}</div>
      <p className='welcome__txt'>{txt}</p>
    </div>
    <div className={`welcome__backgnd welcome__backgnd--${backgnd}`}></div>
  </div>

export default WelcomeSlide