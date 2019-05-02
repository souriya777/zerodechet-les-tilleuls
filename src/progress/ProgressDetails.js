import React from 'react'

import { GARBAGE_TYPE } from '../garbage/GarbageHelper'

const ProgressDetails = (props) => {
  const { data } = props;

  const d1 = data[GARBAGE_TYPE.RECYCLABLE]
  const d2 = data[GARBAGE_TYPE.NORECYCLABLE]
  
  return (
    <div className='progress__details'>
      <div className='progress__left'>
        <div className="progress__title">{d1.type}</div>
        <div className="progress__avg">{d1.avg}</div>
        <div className="progress__evo">{d1.evo}</div>
      </div>
      <div className='progress__right'>
        <div className="progress__title">{d2.type}</div>
        <div className="progress__avg">{d2.avg}</div>
        <div className="progress__evo">{d2.evo}</div>
      </div>
    </div>
  )
}

export default ProgressDetails
