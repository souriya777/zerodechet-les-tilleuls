import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getQuote } from '../utils/quote-utils'

import WeightForm from './WeightForm'

class Weight extends Component {

  render() {
    const { user } = this.props
    if (user == null) {
      return null
    }

    return (
      <div className='weight'>
        <h1 className='h1'>La pesée</h1>
        <div className='quote'>{getQuote()}</div>
        <div className='weight__form'>
          <WeightForm
            nbPers={user.nbPers}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Weight)