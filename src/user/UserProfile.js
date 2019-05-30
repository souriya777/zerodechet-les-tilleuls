import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { isLogged } from '../utils/user-utils'

import UserPhoto from './UserPhoto'
import UserGraph from './UserGraph'

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
    // const memberList = isLogged(user) ? user.home : undefined
    const goal = isLogged(user) ? `${user.goal}g/hab/jr` : ``
    const nbPers = isLogged(user) ? `Pour ${user.nbPers} personne(s)` : ``

    return (
      <div className='profile'>

        <div className='profile__id'>
          <UserPhoto src={photo} />
          <div className='profile__name'>{name}</div>
        </div>

        <div className='profile__goal'>
          <h2 className='h2'>OBJECTIF :</h2>
          <div className='profile__body profile__body--accent'>
            <UserGraph />
          </div>
        </div>

        <div className='profile__members'>
          <h2 className='h2'>MEMBRES DE VOTRE FOYER :</h2>
          <div className='profile__body'>
            {nbPers}
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