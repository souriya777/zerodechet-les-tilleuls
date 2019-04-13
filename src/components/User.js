import React from 'react'

// FIXME
import photo from '../img/souriya-photo.png'

const User = () => {
  return (
    <div className='user'>
      <a href="/profile" class="user__link">
        <img src={photo} alt="Utilisateur Souriya" class="user__photo" />
        <div class="user__name">Souriya</div>
      </a>
    </div>
  )
}

export default User;