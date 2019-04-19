import React, { Component } from 'react'

import IconContact from '../common-ui/IconContact'
import ContactForm from './ContactForm';

class Contact extends Component {

  state = {
    formVisible: false
  }

  toggleForm = (e) => {
    console.log('toggle form');
    
    this.setState((prevState, props) => ({
      formVisible: !prevState.formVisible
    }))
  }

  render () {
    let formVisible = this.state.formVisible ? 'contact_form--visible' : 'contact__form'
    return (
      <div className="contact">
  
        <div className={formVisible}>
          <ContactForm />
        </div>
  
        <div>
          <button className='contact__button' onClick={this.toggleForm}>
            <div className="contact__tooltip">Nous<br />contacter</div>
            <IconContact className='contact__icon' />
          </button>
        </div>
        
      </div>
    )
  }
}

export default Contact;