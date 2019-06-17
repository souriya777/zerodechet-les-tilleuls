import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getQuote } from '../utils/quote-utils'
import { handleGetLastStartDate } from '../weight/weightActions'

import WeightForm from './WeightForm'

class Weight extends Component {

  componentDidMount() {
    const { uid } = this.props
    console.log('componentDidMount', uid)
    if (uid) 
      this.loadData(uid)
  }

  componentDidUpdate() {
    const { uid } = this.props
    console.log('componentDidUpdate', uid)
    if (uid) 
      this.loadData(uid)
  }

  loadData(uid, period) {
    const { dispatch } = this.props
    dispatch(handleGetLastStartDate(uid))
  }

  render() {
    const { uid } = this.props
    if (uid == null) {
      return null
    }

    return (
      <div className='weight'>
        <h2 className='h2'>La pesée</h2>
        <div className='quote'>{getQuote()}</div>
        <div className='weight__form'>
          <WeightForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => { 
  const { user } = state

  const uid = user ? user.uid : null

  return { 
    uid
  }
}

export default connect(mapStateToProps)(Weight)