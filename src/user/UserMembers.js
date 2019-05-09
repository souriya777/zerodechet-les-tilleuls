import React from 'react'

const UserMembers = ({ members }) => {
  if (! members) {
    return <>Pas de membres dans votre foyer</>
  }

  return (
    <div className="profile__members">
      <h2 className='h2 u-margin-bottom-small'>Membres:</h2>
      <div className="u-center-content">
        <ul className='profile__list'>
          {members.map(member => (
            <li className='profile__item' key={member.id}>{member.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserMembers