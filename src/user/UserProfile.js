import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from './userActions'
import { handleLoadData } from '../utils/sharedActions'

export const UserProfileHeader = () => (
  <div className="profile__header">
    <h1 className='h1'>Profil</h1>
  </div>
)


class UserProfile extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadData = () => {
    this.props.dispatch(handleLoadData())
  }

  render() {
    return (
      <div>
        <h3>Objectif</h3>
        <p>0.250kg/hab/jour</p>
        <h3>Membres:</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button onClick={this.handleLoadData}>Charger les données test</button>
        <br/>
        <button onClick={this.handleSignout}>Se déconnecter</button>
      </div>
    )
  }
}

export default connect()(UserProfile)