import React, { Component } from 'react'
import { connect } from 'react-redux'

class Stat extends Component {

  render() {
    return (
      <div className='stat'>
        graph + NAV
      </div>
    )
  }
}

export default connect()(Stat)