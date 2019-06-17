import React from 'react'

import { RDV_HARDCODED } from './rdv-list-hardcoded'
import { toDateFormat, toTimeFormat } from '../utils/date-utils'

import RdvPad from './RdvPad'

const RdvList = () => {
  const item = RDV_HARDCODED[0]

  const freeCount = item.maxCount - item.count
  let countLbl = null
  if (freeCount === 0) {
    countLbl = 'Plus de places disponibles'
  } else if (freeCount === 1) {
    countLbl = '1 place disponible'
  } else {
    countLbl = `${freeCount} places disponibles`
  }
  

  return (
    <>
      <div className='rdv__item'>
        {/* <div className='rdv__item-img'>
          <img src={item.picture} alt={item.title} />
        </div> */}
        <div className='rdv__item-type'>
          <RdvPad type={item.type} />
        </div>
        <div className='rdv__item-day'>
          {toDateFormat(item.date)}
        </div>
        <div className='rdv__item-hour'>
          {toTimeFormat(item.date)}
        </div>
        <div className='rdv__item-dispo'>
          {countLbl}
        </div>
        <button>S'INSCRIRE</button>
        <div className='rdv__item-title'>
          {item.title}
        </div>
        <div className='rdv__item-place'>
          {item.place}
        </div>
      </div>
    </>
  )
}

export default RdvList