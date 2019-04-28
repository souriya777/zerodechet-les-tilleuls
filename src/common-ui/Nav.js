import React, { Component } from 'react'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import { isLogged } from '../utils/user-utils'
import NavItem from './NavItem'
import IconGarbage from './IconGarbage'
import IconProgress from './IconProgress'
import IconEvent from './IconEvent'
import IconUser from './IconUser'
import Portrait from './Portrait'

class Nav extends Component {

  render () {
    // FIXME 
    // const { user } = this.props
    // const user = undefined
    const user = {
      uid: 'fs8989Fdfqfdsfdsfqsdfsq',
      name: 'Souriya Phongsavanh',
      photo: 'https://lh3.googleusercontent.com/a-/AAuE7mC-1369yY_uKJPs-C4bJm2tRZCnGWQtKxQMctZsnFg=s192'
    }

    // const portrait = isLogged(user) 
    //   ? <Portrait photo={user.photo} />
    //   : null


    return (
      <nav className='nav'>
        <ul className='nav__list'>
          { isLogged(user)
            ? <>
                <NavItem 
                  label='Pesée' 
                  icon={IconGarbage} 
                  linkTo={ROUTES.garbage} />
                <NavItem 
                  label='Progression' 
                  icon={IconProgress} 
                  linkTo={ROUTES.progress} />
                <NavItem 
                  label='Événements' 
                  icon={IconEvent} 
                  linkTo={ROUTES.events} />
                <NavItem 
                  label='Profil' 
                  img={() => (
                    <Portrait photo={user.photo} />
                  )} 
                  linkTo={ROUTES.profile} />
              </>
            : <NavItem 
              label='Connexion' 
              icon={IconUser} 
              linkTo={ROUTES.welcome} />
          }
        </ul>
      </nav>
    )
  }
}

// FIXME
// function mapStateToProps (state) => ({ user: state.user }) 

export default connect()(Nav)