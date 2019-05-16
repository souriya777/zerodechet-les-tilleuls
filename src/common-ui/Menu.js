import React from 'react'

import MenuItem from './MenuItem'
import ROUTES from '../app/routes'
import SVGCalendar from './svg/SVGCalendar'
import SVGUser from './svg/SVGUser'
import SVGWeight from './svg/SVGWeight'
import SVGStat from './svg/SVGStat'

const Menu = () =>
  <div className='menu'>

    <ul className='menu__list'>

        <MenuItem
          label={'Pesée'}
          icon={SVGWeight}
          linkTo={ROUTES.weight}
        /> 
      
        <MenuItem
          label={'Stats'}
          icon={SVGStat}
          linkTo={ROUTES.stat}
        /> 

        <MenuItem
          label={'Rdv'}
          icon={SVGCalendar}
          linkTo={ROUTES.rdv}
        /> 
      
        <MenuItem
          label={'Profil'}
          icon={SVGUser}
          linkTo={ROUTES.profile}
        /> 
      
    </ul>

    
  </div>

export default Menu