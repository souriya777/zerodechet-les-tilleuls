import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { handleSignout } from '../user/userActions'
import { handleLoadData } from '../utils/sharedActions'
import { handleRemoveAllWeight } from '../weight/weightActions'
import { handleLoadCurrentStat } from '../stat/statActions'
import ROUTES from '../app/routes'

import UserProfileLink from './UserProfileLink'
import HeaderTxt from '../common-ui/HeaderTxt'
import SVGUser from '../common-ui/svg/SVGUser'
import SVGPerso from '../common-ui/svg/SVGPerso'
import SVGParam from '../common-ui/svg/SVGParam'
import SVGHelp from '../common-ui/svg/SVGHelp'
import SVGGift from '../common-ui/svg/SVGGift'
import SVGRdv from '../common-ui/svg/SVGRdv'
import SVGAddPost from '../common-ui/svg/SVGAddPost'
import SVGBlog from '../common-ui/svg/SVGBlog'
import SVGFriend from '../common-ui/svg/SVGFriend'
import SVGHint from '../common-ui/svg/SVGHint'

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
    // const { currently, goal } = this.props

    return (
      <div className='profile'>
        <HeaderTxt>
          <SVGUser className='svg svg--dark' />
          <div className='small-offset'>Mon profil</div>
        </HeaderTxt>

        <div className='bloc profile__links'>
          <UserProfileLink
            label='Infos personnelles'
            icon={SVGPerso}
            route={`${ROUTES.profile}/perso`}
          />
          <UserProfileLink
            label='Paramètres du compte'
            icon={SVGParam}
            route={`${ROUTES.profile}/param`}
          />
          <UserProfileLink
            label='Aide et assistance'
            icon={SVGHelp}
            route={`${ROUTES.profile}/help`}
          />
        </div>

        <div className='bloc hr-simple'></div>

        <div className='bloc profile__links'>
          <div className='profile__role'>Devenir acteur</div>
          <UserProfileLink
            label='Don alimentaire'
            extra='Le don en nature est un acte de générosité très concret qui vous permet de donner des produits dès lors qu’ils sont consommables et utilisables.'
            icon={SVGGift}
            route={`${ROUTES.profile}/gift`}
          />
          <UserProfileLink
            label='Proposer des rdv'
            icon={SVGRdv}
            route={`${ROUTES.profile}/rdv`}
          />
          <UserProfileLink
            label='Publier un article'
            icon={SVGAddPost}
            route={`${ROUTES.profile}/post`}
          />
        </div>

        <div className='bloc hr-simple'></div>

        <div className='bloc profile__links'>
          <div className='profile__role'>S'informer +</div>
          <UserProfileLink
            label='Mes astuces'
            extra={`Retrouver toutes les astuces 80/20, vous permettant d'atteindre votre objectif, avec moins d'efforts...`}
            icon={SVGHint}
            route={`${ROUTES.profile}/hint`}
          />
          <UserProfileLink
            label='Visiter le blog'
            icon={SVGBlog}
            route={`${ROUTES.profile}/blog`}
          />
          <UserProfileLink
            label='Inviter des amis'
            icon={SVGFriend}
            route={`${ROUTES.profile}/friend`}
          />
        </div>

        {/* <div className='profile__goal'>
          <h2 className='h2'>Votre progression depuis votre inscription :</h2>
          <UserGraph 
            currently={currently} 
            goal={goal} 
          />
        </div> */}

        <div className='profile__load-data'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleLoadFakeData}
          >
            + de stats
          </button>
        </div>

        <div className='profile__unload-data'>
          <button 
            className='btn btn--transparent' 
            type='submit' 
            onClick={this.handleUnloadFakeData}
          >
            - de stats
          </button>
        </div>
        
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