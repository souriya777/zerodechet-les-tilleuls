import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { isLogged } from '../utils/user-utils'
import { padWeight } from '../utils/string-utils'

import UserPhoto from './UserPhoto'
import UserMemberList from './UserMemberList';

class UserProfile extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadFakeData = () => {
    const { user, history } = this.props
    this.props.dispatch(handleLoadData(user.uid, history))
  }

  render() {
    const { user } = this.props
    const photo = isLogged(user) ? user.photo : undefined
    const name = isLogged(user) ? user.name : undefined
    const memberList = isLogged(user) ? user.home : undefined
    const goal = isLogged(user) ? `${padWeight(user.goal)}kg/hab/jr` : `Vous n'avez pas encore défini d'object.`

    return (
      <div className='profile'>

        <div className='profile__id'>
          <UserPhoto src={photo} />
          <div className='profile__name'>{name}</div>
        </div>

        <div className='profile__goal'>
          <h2 className='h2'>OBJECTIF :</h2>
          <div className='profile__body profile__body--accent'>
            {goal}
          </div>
        </div>

        <div className='profile__members'>
          <h2 className='h2'>MEMBRES DE VOTRE FOYER :</h2>
          <div className='profile__body'>
            <UserMemberList items={memberList} />
          </div>
        </div>

        <div className='profile__load-data'>
          <button className='btn btn--accent' type='submit' onClick={this.handleLoadFakeData}>
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

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(withRouter(UserProfile))