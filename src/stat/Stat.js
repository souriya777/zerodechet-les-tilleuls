import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadStat } from './statActions'
import { PERIOD, PERIOD_LABEL, DEFAUT_PERIOD } from './StatHelper'

import SmartSelect from '../common-ui/SmartSelect'
import StatGraph from './StatGraph'

class Stat extends Component {

  state = {
    period: DEFAUT_PERIOD
  }

  handleChangePeriod = e => {
    const { uid} = this.props
    const period = e.target.value
    this.loadData(uid, period)
    this.setState({period: period})
  }

  componentDidMount() {
    const { uid } = this.props
    const { period } = this.state
    if (uid) 
      this.loadData(uid, period)
  }

  componentDidUpdate() {
    const { uid } = this.props
    const { period } = this.state
    if (uid) 
      this.loadData(uid, period)
  }

  loadData(uid, period) {
    const { dispatch } = this.props
    dispatch(handleLoadStat(uid, period))
  }

  render () {
    console.log('render handleLoadStat', this.state.period)
    const { period } = this.state
    return (
      <div className='stat'>
        <div className='stat__action'>
          <SmartSelect
            options={[
              PERIOD_LABEL[PERIOD.WEEK], 
              PERIOD_LABEL[PERIOD.MONTH], 
              PERIOD_LABEL[PERIOD.TRIMESTER]
            ]}
            ids={[
              PERIOD.WEEK, 
              PERIOD.MONTH, 
              PERIOD.TRIMESTER
            ]}
            placeholder='Période'
            onChange={this.handleChangePeriod}
          />
        </div>
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

  return {
    uid
  }
}

export default connect(mapStateToProps)(Stat)