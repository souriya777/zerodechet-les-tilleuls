import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadStat } from './statActions'
import { PERIOD, PERIOD_LABEL, DEFAUT_PERIOD } from './StatHelper'

import SmartSelect from '../common-ui/SmartSelect'
import StatGraph from './StatGraph'

class Stat extends Component {
  state = {
    period: DEFAUT_PERIOD,
    componentMount: false
  }

  handleChangePeriod = e => {
    const { user, dispatch } = this.props
    const period = e.target.value
    dispatch(handleLoadStat(user.uid, period))

    this.setState({period: period})
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    const { componentMount } = this.state
    if (! componentMount) {
      const { user, dispatch } = this.props
      const { period } = this.state
      dispatch(handleLoadStat(user.uid, period))

      this.setState({componentMount: true})
    }
  }
  
  render () {
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

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Stat)