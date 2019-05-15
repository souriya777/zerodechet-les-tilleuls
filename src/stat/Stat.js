import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'

class Stat extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div className='stat'>
        STAT graph + NAV
      </div>
    )
  }
}

export default connect()(Stat)