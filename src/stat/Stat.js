import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import StatGraph from './StatGraph'
import SmartSelect from '../common-ui/SmartSelect'
import { PERIOD, PERIOD_LABEL } from './StatHelper'
import { handleLoadStat } from './statActions'

class Stat extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleChangePeriod = e => {
    const period = e.target.value
    console.log('handleLoad ', period)
  }

  componentDidMount() {
    const { user } = this.props
    console.log(user);
    
    const uid = 'testa'
    this.props.dispatch(handleLoadStat(uid, PERIOD.WEEK))
  }


  render() {
    return (
      <div className='stat'>
        {/* <h1 className='h1'>Stats de la semaine</h1> */}
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

const mapStateToProps = state => ({ user: state.user})

export default connect(mapStateToProps)(Stat)