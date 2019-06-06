import React, { Component } from 'react'

import EventCreationForm from './EventCreationForm';

class EventCreation extends Component {
  render() {
    return (
      <div className='event-creation__content'>
        <h2>Proposer un événement</h2>
        <EventCreationForm />
      </div>
    )
  }
}

export default EventCreation