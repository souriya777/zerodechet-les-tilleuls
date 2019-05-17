import React from 'react'

import SVGUser from '../common-ui/svg/SVGUser'

const UserPhoto = ({ src }) => 
  <div className='user__photo'>
    {src 
      ? <img src={src} alt='Aventurier' />
      : <div className='user__avatar'><SVGUser /></div>
    }
  </div>

export default UserPhoto;