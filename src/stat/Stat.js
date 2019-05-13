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
        graph + NAV
        <button className='btn' type="submit" onSubmit={this.handleSignout}>
          se déconnecter
        </button>
      </div>
    )
  }
}

export default connect()(Stat)