import React from 'react'

// FIXME
import photo from '../img/souriya-photo.png'

const User = () => {
  return (
    <div className='user'>
      <a href="/profile" className="user__link">
        <img src={photo} alt="Utilisateur Souriya" className="user__photo" />
        <div className="user__name">Souriya</div>
      </a>
    </div>
  )
}

export default User;