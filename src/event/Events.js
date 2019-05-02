import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadData } from '../utils/sharedActions'

export const EventsHeader = () => (
  <div className="events__header">
    <h1 className='h1'>Événements</h1>
  </div>
)

class Events extends Component {

  handleLoadData = () => {
    this.props.dispatch(handleLoadData())
  }

  render () {
    return (
      <div className='events'>
        <button onClick={this.handleLoadData}>LOAD DATA</button>
      </div>
    )
  }
}

export default connect()(Events)