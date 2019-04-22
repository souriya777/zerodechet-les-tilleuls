import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  render () {
    const { user } = this.props
    return(
      <div className='profile'>
        {user.uid}; {user.name}; {user.photo}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);