import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadStat } from './statActions'
import { PERIOD_LABEL, DEFAUT_PERIOD } from './StatHelper'

import HeaderTxt from '../common-ui/HeaderTxt'
import SVGStat from '../common-ui/svg/SVGStat'
import SVGHuman from '../common-ui/svg/SVGHuman'
import StatGraph from './StatGraph'
import StatChallenge from './StatChallenge'
import StatSelect from './StatSelect'

class Stat extends Component {

  state = {
    period: DEFAUT_PERIOD
  }

  handleChangePeriod = e => {
    const { uid } = this.props
    const period = e.target.value
    this.loadData(uid, period)
    this.setState({period: period})
  }

  componentDidMount() {
    const { uid } = this.props
    const { period } = this.state
    console.log('componentDidMount', uid)
    if (uid) {
      this.loadData(uid, period)
    }
  }
  
  componentDidUpdate() {
    const { uid } = this.props
    const { period } = this.state
    console.log('componentDidUpdate', uid)
    if (uid) {
      this.loadData(uid, period)
    }
  }

  loadData(uid, period) {
    const { dispatch } = this.props
    console.log('loadData');
    dispatch(handleLoadStat(uid, period))
  }

  render () {
    const { period } = this.state
    const { nbPers } = this.props

    return (
      <div className='stat'>
        <HeaderTxt>
          <SVGStat className='svg svg--dark' />
          <div className='small-offset bloc-center'>Mes stats ({nbPers} <SVGHuman className='svg--dark'/>)</div>
        </HeaderTxt>
        <StatChallenge />
        <div className='bloc'>
          <h3 className='h3'>Mes pesées :</h3>
        </div> 
        <StatSelect 
          onChangePeriod={this.handleChangePeriod} 
        />
        <div className='stat__graph'>
          <StatGraph 
            periodLabel={PERIOD_LABEL[period]}
          />
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

export default connect(mapStateToProps)(Stat)