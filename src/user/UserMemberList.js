import React from 'react'

const UserMemberList = ({items }) => {
  if (! items) {
    return <>Aucun membre n'a été ajouté.</>
  }

  return (
    <div className="u-center-content">
      <ul className='list'>
        <li className='list__item' key={0}>Vous</li>
        {items.map(member => (
          <li className='list__item' key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserMemberList