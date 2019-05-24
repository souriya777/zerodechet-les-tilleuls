import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadStat } from './statActions'
import { PERIOD, PERIOD_LABEL } from './StatHelper'

import SmartSelect from '../common-ui/SmartSelect'
import StatGraph from './StatGraph'

class Stat extends Component {

  handleChangePeriod = e => {
    const { user, dispatch } = this.props
    const period = e.target.value
    dispatch(handleLoadStat(user.uid, period))
  }
  
  componentDidUpdate() {
    const { user, dispatch } = this.props
    dispatch(handleLoadStat(user.uid))
  }
  
  render () {
    return (
      <div className='stat'>
        <div className='stat__action'>
          <SmartSelect
            options={[PERIOD_LABEL.WEEK, PERIOD_LABEL.MONTH, PERIOD_LABEL.TRIMESTER]}
            ids={[PERIOD.WEEK, PERIOD.MONTH, PERIOD.TRIMESTER]}
            placeholder='Période'
            onChange={this.handleChangePeriod}
          />
        </div>
        <div className='stat__graph'>
          <StatGraph />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Stat)