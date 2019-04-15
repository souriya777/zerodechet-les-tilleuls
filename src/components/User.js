import React from 'react'
import { Link } from 'react-router-dom'

// TODO call it dynamically
// TODO move to bdd
import photo from '../img/souriya-photo.png'

const User = (props) => {
  const path = props.match.path;
  return (
    <div className='user'>
      <Link to={`${path}/profile`} className="user__link">
        <img src={photo} alt="Utilisateur Souriya" className="user__photo" />
        <div className="user__name">Souriya</div>
      </Link>
    </div>
  )
}

export default User;