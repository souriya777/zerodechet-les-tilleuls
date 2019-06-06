import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { handleRemoveAllWeight } from '../weight/weightActions'
import { handleLoadCurrentStat } from '../stat/statActions'

import UserGraph from './UserGraph'

class UserProfile extends Component {

  handleSignout = () => {
    this.props.dispatch(handleSignout())
  }

  handleLoadFakeData = () => {
    const { uid, history, dispatch } = this.props
    dispatch(handleLoadData(uid, history))
  }

  handleUnloadFakeData = () => {
    this.props.dispatch(handleRemoveAllWeight())
  }

  componentDidMount() {
    const { uid } = this.props
    console.log('componentDidMount', uid)
    if (uid) 
      this.loadData(uid)
  }

  componentDidUpdate() {
    const { uid } = this.props
    console.log('componentDidUpdate', uid)
    if (uid) 
      this.loadData(uid)
  }
  
  loadData(uid) {
    const { dispatch } = this.props
    dispatch(handleLoadCurrentStat(uid))
  }

  render() {
    console.log('render UserProfile')
    const { currently, goal } = this.props

    return (
      <div className='profile'>

        <div className='profile__goal'>
          <h2 className='h2'>Votre progression depuis votre inscription :</h2>
          <UserGraph 
            currently={currently} 
            goal={goal} 
          />
        </div>

        <div className='profile__load-data'>
          <button 
            className='btn' 
            type='submit' 
            onClick={this.handleLoadFakeData}
          >
            charger des pesées de démo :)
          </button>
        </div>

        <div className='profile__unload-data'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleUnloadFakeData}
          >
            supprimer mes pesées
          </button>
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
  const { user, stat } = state
  const uid = user ? user.uid : null
  const goal = user ? Math.round(user.goal) : 0
  const currently = stat ? Math.round(stat.current) : 0

  return {
    uid,
    goal,
    currently
  }
}

export default connect(mapStateToProps)(withRouter(UserProfile))