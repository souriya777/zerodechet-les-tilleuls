import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getQuote } from '../utils/quote-utils'
import { handleGetLastStartDate } from '../weight/weightActions'

import WeightForm from './WeightForm'
import HeaderTxt from '../common-ui/HeaderTxt'
import SVGWeight from '../common-ui/svg/SVGWeight'
import SVGHuman from '../common-ui/svg/SVGHuman'

class Weight extends Component {

  componentDidMount() {
    const { uid } = this.props
    if (uid) 
      this.loadData(uid)
  }

  componentDidUpdate() {
    const { uid } = this.props
    if (uid) 
      this.loadData(uid)
  }

  loadData(uid) {
    const { dispatch } = this.props
    dispatch(handleGetLastStartDate(uid))
  }

  render() {
    const { uid, nbPers } = this.props
    if (uid == null) {
      return null
    }

    return (
      <div className='weight'>
        <HeaderTxt>
          <SVGWeight className='svg svg--dark' />
          <div className='small-offset bloc-center'>La pesée ({nbPers} <SVGHuman className='svg--dark'/>)</div>
        </HeaderTxt>
        <div className='quote bloc'>
          {getQuote()}
        </div>
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
  const nbPers = user ? user.nbPers : null

  return { 
    uid,
    nbPers,
  }
}

export default connect(mapStateToProps)(Weight)