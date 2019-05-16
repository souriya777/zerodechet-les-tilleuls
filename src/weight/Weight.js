import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import WeightForm from './WeightForm';

class Weight extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div className='weight'>
        <h1 className='title'>La pesée</h1>
        <div className='weight__form'>
          <WeightForm />
        </div>
      </div>
    )
  }
}

export default connect()(Weight)