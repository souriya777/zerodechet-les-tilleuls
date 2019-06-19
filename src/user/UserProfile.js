import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { handleRemoveAllWeight } from '../weight/weightActions'
import { handleLoadCurrentStat } from '../stat/statActions'
import ROUTES from '../app/routes'

import HeaderTxt from '../common-ui/HeaderTxt'
import SVGUser from '../common-ui/svg/SVGUser'

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
    if (uid) 
      this.loadData(uid)
  }

  componentDidUpdate() {
    const { uid } = this.props
    if (uid) 
      this.loadData(uid)
  }
  
  loadData(uid) {
    const { dispatch } = this.props
    dispatch(handleLoadCurrentStat(uid))
  }

  render() {
    const { currently, goal } = this.props

    return (
      <div className='profile'>
        <HeaderTxt>
          <SVGUser className='svg svg--dark' />
          <div className='small-offset'>Mon profil</div>
        </HeaderTxt>

        <div className='bloc'>
          <div>LIGNE 1</div>
          <div>LIGNE 2</div>
          <div>LIGNE 3</div>
        </div>

        <div className='bloc hr-simple'></div>

        <div className='bloc'>
          <div>LIGNE 1</div>
          <div>LIGNE 2</div>
          <div>LIGNE 3</div>
        </div>

        <div className='bloc hr-simple'></div>

        <div className='bloc'>
          <div>LIGNE 1</div>
          <div>LIGNE 2</div>
          <div>LIGNE 3</div>
        </div>

        {/* <div className='profile__goal'>
          <h2 className='h2'>Votre progression depuis votre inscription :</h2>
          <UserGraph 
            currently={currently} 
            goal={goal} 
          />
        </div> */}

        {/* <div className='profile__load-data'>
          <button 
            className='btn f__btn' 
            type='submit' 
            onClick={this.handleLoadFakeData}
          >
            charger des pesées de démo :)
          </button>
        </div> */}

        {/* <div className='profile__unload-data'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleUnloadFakeData}
          >
            supprimer mes pesées
          </button>
        </div> */}
        
        <div className='bloc profile__signout'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleSignout}
          >
            se déconnecter
          </button>
        </div>
        <div className='profile__terms terms f__terms'>
          <ul className='terms__links'>
            <li><Link className='link link--color' to={ROUTES.terms}>Aide et assistance</Link></li>
            <li><Link className='link link--color' to={ROUTES.terms}>Conditions générales</Link></li>
            <li><Link className='link link--color' to={ROUTES.terms}>Politique de confidentialité</Link></li>
          </ul>
          <div className='terms__copyright'>© 2019 Souriya, Inc. Tous droits réservés.</div>
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