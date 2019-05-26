import React, { Component } from 'react'
import { connect } from 'react-redux'

import WeightForm from './WeightForm'

class Weight extends Component {

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