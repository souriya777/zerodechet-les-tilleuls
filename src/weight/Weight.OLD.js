import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddWeight } from './WeightActions'
import WeightForm from './WeightForm'

export class Weight extends Component {

  // FIXME when no need to handleChange
  handleChange = e => {
    console.log(e.target.value);
  }

  handleSubmit = ({nbPers, nbDays, totalWeight, date, type}) => {
    this.props.dispatch(handleAddWeight(nbPers, nbDays, totalWeight, date, type))
  } 

  render () {
    return (
      <div className='weight__content'>
        <WeightForm onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    )
  }
}

export default connect()(Weight);