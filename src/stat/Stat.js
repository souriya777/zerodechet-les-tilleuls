import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import StatGraph from './StatGraph'
import SmartSelect from '../common-ui/SmartSelect'
import { PERIOD } from './StatHelper'
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
    this.props.dispatch(handleLoadStat(PERIOD.WEEK))
  }


  render() {
    return (
      <div className='stat'>
        {/* <h1 className='h1'>Stats de la semaine</h1> */}
        <div className='stat__action'>
          <SmartSelect
            options={['Cette semaine', 'Ce mois', 'Ce trimestre']}
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

export default connect()(Stat)