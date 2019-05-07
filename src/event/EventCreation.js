import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import IconArrowBack from '../common-ui/IconArrowBack'
import EventCreationForm from './EventCreationForm';

export const EventCreationHeader = () => (
  <div className="event-creation__header">
    <Link className='link' to={ROUTES.events}>
      <IconArrowBack />
    </Link>
  </div>
)

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