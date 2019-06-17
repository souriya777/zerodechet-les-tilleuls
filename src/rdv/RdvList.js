import React from 'react'

import { RDV_HARDCODED } from './rdv-list-hardcoded'
import { toDateFormat, toTimeFormat } from '../utils/date-utils'

import RdvFreeCount from './RdvFreeCount'
import RdvType from './RdvType'
import RdvSubscription from './RdvSubscription'

const RdvList = () => {
  const item = RDV_HARDCODED[0]

  return (
    <>
      <div className='rdv__item'>
        {/* <div className='rdv__item-img'>
          <img src={item.picture} alt={item.title} />
        </div> */}
        <div className='row'>
          <RdvType type={item.type} />
          <span className='rdv__item-day rdv__pad'>
            {toDateFormat(item.date)}
          </span>
          <span className='rdv__item-hour rdv__pad'>
            {toTimeFormat(item.date)}
          </span>
        </div>
        <div className='rdv__item-dispo'>
          <RdvFreeCount 
            maxCount={item.maxCount} 
            count={item.count} 
          />
        </div>
        <div className='rdv__item-title'>
          {item.title}
        </div>
        <div className='rdv__item-place'>
          {item.place}
        </div>
        <RdvSubscription />
      </div>
    </>
  )
}

export default RdvList