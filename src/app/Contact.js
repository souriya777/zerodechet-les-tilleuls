import React from 'react'

import IconContact from '../common-ui/IconContact'
import FormContact from '../utils/FormContact';

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