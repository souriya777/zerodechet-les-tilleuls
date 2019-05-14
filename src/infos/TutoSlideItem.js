import React from 'react'

const TutoSlide = ({ title, txt, background }) =>
  <div className='tuto__slide'>
    <div className='tuto__wording'>
      <div className='tuto__title'>{title}</div>
      <p className='tuto__txt'>{txt}</p>
    </div>
    <div className={`tuto__background tuto__background--${background}`}>
    </div>
  </div>

export default TutoSlide