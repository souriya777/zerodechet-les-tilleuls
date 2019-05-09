import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddWeight } from './GarbageActions'
import GarbageWeighForm from './GarbageWeighForm'

export class Garbage extends Component {

  // FIXME when no need to handleChange
  handleChange = e => {
    console.log(e.target.value);
  }

  handleSubmit = ({nbPers, nbDays, totalWeight, date, type}) => {
    this.props.dispatch(handleAddWeight(nbPers, nbDays, totalWeight, date, type))
  } 

  render () {
    return (
      <div className='garbage__content'>
        <GarbageWeighForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    )
  }
}

export default connect()(Garbage);