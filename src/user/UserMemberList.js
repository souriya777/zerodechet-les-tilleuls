import React from 'react'

const UserMemberList = ({items }) => {
  if (items == null) {
    return <>Aucun membre n'a été ajouté.</>
  }

  return (
    <div className='member'>
      <ul className='member__list'>
        <li className='member__item' key={0}>Vous</li>
        {items.map(member => (
        <li className='member__item' key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserMemberList