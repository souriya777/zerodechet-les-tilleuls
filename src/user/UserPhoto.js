import React from 'react'

import SVGUser from '../common-ui/svg/SVGUser'

const UserPhoto = ({ src, width, height }) => {
  console.log(src, width, height)
  return (
    <div className='user__photo'>
      {src 
        ? <img src={src} alt='Aventurier' />
        : <div className='user__avatar'>
            <SVGUser width={width} height={height} />
          </div>
      }
    </div>
  )
}

export default UserPhoto;