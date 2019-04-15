import React from 'react'

import IconContact from './icons/IconContact'
import FormContact from './FormContact';

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact__form">
        <FormContact />
      </div>

      <button className='contact__button'>
        <div className="contact__tooltip">Nous<br />contacter</div>
        <IconContact className='contact__icon' />
      </button>
      
    </div>
  )
}

export default Contact;