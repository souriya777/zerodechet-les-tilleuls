import React from 'react'
import { Link } from 'react-router-dom'

const UserProfileLink = ({ route, icon, label, extra }) => {
  const Icon = icon
  const size = 20

  return (
    <Link className='link' to={route}>
      <div className='bloc-bottom'>
        <div className='profile__item'>
          <Icon height={size} className='svg--dark' />
          <div>{label}</div>
        </div>
        {extra != null
          ? <div className='profile__desc'>{extra}</div>
          : ''
        }
      </div>
    </Link>
  )
}

export default UserProfileLink