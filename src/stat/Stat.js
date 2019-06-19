import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleLoadStat } from './statActions'
import { PERIOD, PERIOD_LABEL, DEFAUT_PERIOD } from './StatHelper'

import HeaderTxt from '../common-ui/HeaderTxt'
import SmartSelect from '../common-ui/SmartSelect'
import SVGStat from '../common-ui/svg/SVGStat'
import StatGraph from './StatGraph'
import StatEmpty from './StatEmpty'
import StatChallenge from './StatChallenge'

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
    const { period, stat } = this.state

    return (
      <div className='stat'>
        <HeaderTxt>
          <SVGStat className='svg svg--dark' />
          <div className='small-offset'>Mes stats</div>
        </HeaderTxt>
        <StatChallenge />
        <div className='bloc'>
          <h3 className='h3'>Mes pesées :</h3>
        </div>
        { stat == null
          ? <StatEmpty periodLabel={PERIOD_LABEL[period]}/>
          : <>
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
                  stat={stat}
                  periodLabel={PERIOD_LABEL[period]}
                />
              </div>
            </>
        }
      </div>
    )
  }
}

const mapStateToProps = state => { 
  const { user } = state
  const uid = user ? user.uid : null

  return {
    uid,
    stat: state.stat
  }
}

export default connect(mapStateToProps)(Stat)