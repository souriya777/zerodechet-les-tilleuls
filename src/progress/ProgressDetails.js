import React from 'react'

import { WEIGHT_TYPE } from '../weight/WeightHelper'

const ProgressDetails = (props) => {
  const { data } = props;

  const d1 = data[WEIGHT_TYPE.RECYCLABLE]
  const d2 = data[WEIGHT_TYPE.NORECYCLABLE]
  
  return (
    <div className='progress__details'>
      <div className='progress__left'>
        <h2 className="h2">{d1.type}</h2>
        <div className="progress__avg">{d1.avg}</div>
        <div className="progress__evo">{d1.evo}</div>
      </div>
      <div className='progress__right'>
        <h2 className="h2">{d2.type}</h2>
        <div className="progress__avg">{d2.avg}</div>
        <div className="progress__evo">{d2.evo}</div>
      </div>
    </div>
  )
}

export default ProgressDetails
