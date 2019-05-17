import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'

class UserProfile extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div className='profile'>
        STAT graph + NAV
        <button className='btn' type="submit" onClick={this.handleSignout}>
          se déconnecter
        </button>
      </div>
    )
  }
}

export default connect()(UserProfile)