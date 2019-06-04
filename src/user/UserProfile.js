import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { handleRemoveAllWeight, handleGetLastStartDate } from '../weight/weightActions'
import { isLogged } from '../utils/user-utils'

import UserGraph from './UserGraph'

class UserProfile extends Component {

  componentDidMount() {
    const { user, dispatch } = this.props
    dispatch(handleGetLastStartDate(user.uid))
  }

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadFakeData = () => {
    const { user, history } = this.props
    this.props.dispatch(handleLoadData(user.uid, history))
  }

  handleUnloadFakeData = () => {
    this.props.dispatch(handleRemoveAllWeight())
  }

  render() {
    const { user, weight } = this.props
    const nbPers = isLogged(user) ? `Pour ${user.nbPers} personne(s)` : ``
    const anyDemoData = weight != null ? true : false

    return (
      <div className='profile'>

        <div className='profile__goal'>
          <h2 className='h2'>{nbPers}</h2>
          <UserGraph />
        </div>

        <div className='profile__load-data'>
          { anyDemoData
            ? <button 
                className='btn btn--accent' 
                type='submit' 
                onClick={this.handleUnloadFakeData}
              >
                supprimer mes données saisies
              </button>
            : <button 
                className='btn btn--accent' 
                type='submit' 
                onClick={this.handleLoadFakeData}
              >
                charger des données de démo :)
              </button>
          } 
        </div>
        
        <div className='profile__signout'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleSignout}
          >
            se déconnecter
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    weight: state.weight 
  }
}

export default connect(mapStateToProps)(withRouter(UserProfile))