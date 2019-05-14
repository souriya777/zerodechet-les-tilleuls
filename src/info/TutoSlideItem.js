import React from 'react'

const TutoSlide = ({ title, txt, backgnd }) =>
  <div className='tuto__slide'>
    <div className='tuto__wording'>
      <div className='tuto__title'>{title}</div>
      <p className='tuto__txt'>{txt}</p>
    </div>
    <div className={`backgnd backgnd--${backgnd}`}></div>
  </div>

export default TutoSlide