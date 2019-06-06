import React from 'react'
import { connect } from 'react-redux'

import { isLogged } from '../utils/user-utils'

import MenuItem from './MenuItem'
import ROUTES from '../app/routes'
import SVGWeight from './svg/SVGWeight'
import SVGStat from './svg/SVGStat'
import UserPhoto from '../user/UserPhoto'

const Menu = ({ user }) => {
  const photo = isLogged(user) ? user.photo : undefined

  return (
    <div className='menu'>
      <ul className='menu__list'>
        <MenuItem
          label={'Pesée'}
          icon={SVGWeight}
          route={ROUTES.weight}
        /> 
        <MenuItem
          label={'Stats'}
          icon={SVGStat}
          route={ROUTES.stat}
        /> 
        <MenuItem
          label={'Profil'}
          photo={() => <UserPhoto src={photo} />}
          route={ROUTES.profile}
        /> 
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Menu)