import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import StatGraph from './StatGraph';

class Stat extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div className='stat'>
        <div className='stat__graph'>
          <StatGraph />
        </div>
        <div className='stat__action'>
          SELECT
        </div>
      </div>
    )
  }
}

export default connect()(Stat)