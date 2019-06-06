import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import EventList from './EventList'
import Button from '../common-ui/Button'
import { handleFetchEventForUser } from './eventActions'

class Event extends Component {

  componentDidMount() {
    this.props.dispatch(handleFetchEventForUser())
  }

  render () {

    const { event } = this.props

    const eventList = (event && event.list) ? event.list : undefined

    return (
      <div className='content-grid'>
        <div className='event__creation'>
          <Link className='link' to={ROUTES.eventCreation}>
            <Button raised={true}>Proposer un événement</Button>
          </Link>
        </div>

        <h2 className='h2'>Prochainement :</h2>
        <EventList items={eventList}/>

        <Button transparency={true}>Montrer davantage</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({event: state.event})

export default connect(mapStateToProps)(Event)