import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleLoadData } from '../utils/sharedActions'

import StatChartWrapper from './StatChartWrapper'
import StatEmpty from './StatEmpty'

class StatGraph extends Component {

  handleLoadFakeData = () => {
    const { uid, history, dispatch } = this.props
    dispatch(handleLoadData(uid, history))
  }

  render() {
    const { stat, periodLabel } = this.props

    if (stat == null) {
      return (
        <StatEmpty 
          periodLabel={periodLabel} 
          onMoreStat={this.handleLoadFakeData}
        />
      )
    }

    return (
        <StatChartWrapper 
          categories={stat.categories} 
          recycled={stat.recycled} 
          norecycled={stat.norecycled} 
          avg={stat.avg}
        />
    )
  }
}


const mapStateToProps = state => ({ stat: state.stat })

export default connect(mapStateToProps)(withRouter(StatGraph))