import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { isLogged } from '../utils/user-utils'

import UserPhoto from './UserPhoto'

class UserProfile extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadFakeData = () => {
    this.props.dispatch(handleLoadData())
  }

  render() {
    const { user } = this.props
    const photo = isLogged(user) ? user.photo : undefined
    const name = isLogged(user) ? user.name : undefined

    return (
      <div className='profile'>

        <div className='profile__id'>
          <UserPhoto src={photo} />
          <div className='profile__name'>{name}</div>
        </div>

        <div className='profile__goal'>
          OBJECTIF 0.235kg/hab/jr
        </div>

        <div className='profile__members'>
          MEMBERS LIST
        </div>

        <div className='profile__load-data'>
          <button className='btn' type='submit' onClick={this.handleLoadFakeData}>
            charger des données de démo :)
          </button>
        </div>
        
        <div className='profile__signout'>
          <button className='btn btn--transparent' type='submit' onClick={this.handleSignout}>
            se déconnecter
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user})

export default connect(mapStateToProps)(UserProfile)