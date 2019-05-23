import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import { handleLoadStat } from './statActions'
import { PERIOD, PERIOD_LABEL } from './StatHelper'

import SmartSelect from '../common-ui/SmartSelect'
import Loading from '../info/Loading'
import StatGraph from './StatGraph'

class Stat extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleChangePeriod = e => {
    const period = e.target.value
    console.log('handleChangePeriod ', period)
  }
  
  componentDidUpdate() {
    const { user, dispatch } = this.props
    dispatch(handleLoadStat(user.uid))
  }

  render () {
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
          <React.Suspense fallback={<Loading />}>
            <StatGraph />
          </React.Suspense> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Stat)