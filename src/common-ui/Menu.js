import React from 'react'

import MenuItem from './MenuItem'
import ROUTES from '../app/routes'
import SVGUser from './svg/SVGUser'
import SVGWeight from './svg/SVGWeight'
import SVGStat from './svg/SVGStat'

const Menu = () =>
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

        {/* DEACTIVATE IN BETA VERSION */}
        {/* <MenuItem
          label={'Rdv'}
          icon={SVGCalendar}
          route={ROUTES.rdv}
        />  */}
      
        <MenuItem
          label={'Profil'}
          icon={SVGUser}
          route={ROUTES.profile}
        /> 
      
    </ul>

    
  </div>

export default Menu