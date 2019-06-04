import React from 'react'

import SVGUser from '../common-ui/svg/SVGUser'

const UserPhoto = ({ src, width, height }) =>
  <div className='user__photo'>
    {src 
      ? <img src={src} alt='Aventurier' />
      : <div className='user__avatar'>
          <SVGUser width={width} height={height} />
        </div>
    }
  </div>

export default UserPhoto;