import React, { Component } from 'react'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import { isLogged } from '../utils/user-utils'
import NavItem from './NavItem'
import IconGarbage from './icons/IconGarbage'
import IconProgress from './icons/IconProgress'
import IconEvent from './icons/IconEvent'
import IconUser from './icons/IconUser'
import Portrait from './Portrait'

class Nav extends Component {

  render () {
    // FIXME 
    const { user } = this.props

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
                linkTo={ROUTES.landing} />
          }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({ user: state.user }) 

export default connect(mapStateToProps)(Nav)