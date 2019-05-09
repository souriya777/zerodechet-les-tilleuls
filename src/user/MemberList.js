import React from 'react'

const MemberList = ({ items }) => {
  if (! items) {
    return <>Pas de membres dans votre foyer</>
  }

  return (
    <div className="u-center-content">
      <ul className='list'>
        {items.map(member => (
          <li className='list__item' key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default MemberList