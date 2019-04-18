import React from 'react'
import { Link } from 'react-router-dom'

// FIXME call it dynamically
// FIXME move to bdd
import photo from '../_resources/img/souriya-photo.png'

const User = (props) => {
  const path = props.match.path;

  // FIXME dynamize with bdd
  const user = {
    name: 'Souriya',
    photo: photo
  };

  return (
    <div className='user'>
      <Link to={`${path}/profile`} className="user__link">
        <img src={user.photo} alt={`Utilisateur ${user.name}`} className="user__photo" />
        <div className="user__name">{user.name}</div>
      </Link>
    </div>
  )
}

export default User;