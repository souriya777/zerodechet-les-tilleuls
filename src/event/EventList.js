import React from 'react'

const EventList = ({ items }) => {
  if (items == null) {
    return <>Il n'y a aucun événement pour l'instant</>
  }

  // const events = [
    //   {id: 1, title: '8 JUIN: Réunion des participants au défi', subscribed: 'X S\'inscrire'},
    //   {id: 2, title: '15 JUIN: Atelier "Recycler les déchets de cuisines', subscribed: 'V Se désinscrire'},
    //   {id: 3, title: '23 JUIN: Préparer le jardin collectif pour accueillir des semences', subscribed: 'X S\'inscrire'},
    // ]

  return (
    <div className="u-center-content">
      <ul className='list'>
        {items.map((e) => (
          <li className='list__item' key={e.uid}>{e.startDate}-{e.endDate}:{e.title}(<button>{e.subscribed}</button>)</li>
        ))}
      </ul>
    </div>
  )
}

export default EventList