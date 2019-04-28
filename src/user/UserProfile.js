import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from './userActions'

export const UserProfileHeader = () => (
  <div className="profile__header">
    <h1 className='h1'>Profil</h1>
  </div>
)


class UserProfile extends Component {
  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  render() {
    return (
      <div>
        {/* TODO mes habitudes */}
        {/* <Link to={ROUTES.userHabits}>Mes habitudes</Link> */}
        {/* TODO bouton en semi transparence (not primitif) */}
        {/* <a href='#' onClick={this.handleSignout}>Se déconnecter</a> */}
      </div>
    )
  }
}

export default connect()(UserProfile)