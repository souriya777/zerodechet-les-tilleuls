import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProgressChart from './ProgressChart'
import ProgressForm from './ProgressForm'
import ProgressEmpty from './ProgressEmpty'
import { handleLoadProgress } from './progressActions'
import ProgressDetails from './ProgressDetails'
import { WEIGHT_TYPE } from '../weight/WeightHelper'

class Progress extends Component {

  state = {
    period: 'toto'
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

    // TODO dynamize
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
      [WEIGHT_TYPE.RECYCLABLE]: data1,
      [WEIGHT_TYPE.NORECYCLABLE]: data2
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
            options={'toto'}
          />
        </div>
        <div className="progress__line">
          <ProgressChart 
            type='Line'
            data={progress} 
            options={'toto'}
          />
        </div>
        <ProgressDetails 
          data={detailsData}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ progress: state.progress })

export default connect(mapStateToProps)(Progress)