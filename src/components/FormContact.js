import React, { Component } from 'react'

import Form from './Form';
import { getValueFrom } from '../utils/form-utils';

class FormContact extends Component {

  state = {
    email: null,
    sendMsg: null,
    formValid: false
  }

  // FIXME how to make it more generic?
  handleInputChange = e => {
    const {id, value} = getValueFrom(e);
    this.setState({ [id]: value });
  }

  handleSubmit = async(e) => {
    const email = this.state.email;
    const msg = this.state.msg;

    // const signinOK = await sendMsg(email, msg);
    // if (signinOK === true) {
    //   this.setState({ formValid: true});
    // }
  };

  render () {
    if (this.state.formValid === true) {
      // return <Redirect to='/dashboard' />
      // TODO close form
    }

    return (
      <Form 
        title=''
        submitLabel='Envoyer!'
        inputs={
          <>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </>
        }
        onSubmit={this.handleSubmit} />
    );
  }
};

export default FormContact;