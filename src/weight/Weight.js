import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddWeight } from './WeightActions'
import WeightForm from './WeightForm';

class Weight extends Component {

  handleSubmit = ({nbPers, nbDays, totalWeight, date, type}) => {
    this.props.dispatch(handleAddWeight(nbPers, nbDays, totalWeight, date, type))
  } 

  render() {
    return (
      <div className='weight'>
        <h1 className='h1'>La pesée</h1>
        <div className='weight__form'>
          <WeightForm />
        </div>
      </div>
    )
  }
}

export default connect()(Weight)