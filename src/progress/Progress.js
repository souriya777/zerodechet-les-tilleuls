import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProgressChart from './ProgressChart'
import ProgressForm from './ProgressForm'
import ProgressEmpty from './ProgressEmpty'
import { handleLoadProgress } from './progressActions'
import { DEFAULT_PERIOD } from './ProgressHelper'
import {  PROGRESS_CHART_LINE_OPTIONS, PROGRESS_CHART_PIE_OPTIONS } from './ProgressHelper'
import ProgressDetails from './ProgressDetails'
import { GARBAGE_TYPE } from '../garbage/GarbageHelper'

export const ProgressHeader = () => (
  <div className='progress__header'>
    <h1 className='h1'>Progression</h1>
  </div>
)

class Progress extends Component {

  state = {
    period: DEFAULT_PERIOD
  }

  handleChange = (e) => {
    const period = e.target.value
    this.props.dispatch(handleLoadProgress(period))
    this.setState({ period })
  }

  componentDidMount() {
    this.props.dispatch(handleLoadProgress())
  }

  render () {
    const { progress } = this.props
    const { period } = this.state

    if (progress === undefined || progress === null) {
      return <ProgressEmpty />
    }

    // dynamize
    const data1 = {
      type: 'non recyclable',
      avg: '5.2 kg/hab.',
      evo: '+20%'
    }
    const data2 = {
      type: 'recyclable',
      avg: '7.4 kg/hab.',
      evo: '-0.8%'
    }
    const detailsData = {
      [GARBAGE_TYPE.RECYCLABLE]: data1,
      [GARBAGE_TYPE.NORECYCLABLE]: data2
    }

    return (
      <div className='progress__content'>
        <div className="progress__form">
          <ProgressForm
            period={period}
            onChange={this.handleChange} 
          />
        </div>
        <div className="progress__pie">
          <ProgressChart 
            type='Pie'
            data={{series: [80, 20]}} 
            options={PROGRESS_CHART_PIE_OPTIONS}
          />
        </div>
        <div className="progress__line">
          <ProgressChart 
            type='Line'
            data={progress} 
            options={PROGRESS_CHART_LINE_OPTIONS}
          />
        </div>
        <ProgressDetails 
          data={detailsData}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ progress: state.progress })

export default connect(mapStateToProps)(Progress)