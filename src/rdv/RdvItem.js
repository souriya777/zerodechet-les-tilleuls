import React from 'react'

import { toDateFormat, toTimeFormat } from '../utils/date-utils'

import RdvFreeCount from './RdvFreeCount'
import RdvType from './RdvType'
import RdvSubscription from './RdvSubscription'

const RdvItem = ({ id, title, type, where, when, count, maxCount, userSubscribed, wait4 }) => 
  <div className='rdv__item'>
    {/* <div className='rdv__item-img'>
      <img src={picture} alt={title} />
    </div> */}
    <div className='row rdv__what-when'>
      <RdvType type={type} />
      <span className='rdv__day rdv__pad'>
        <h6 className='h6'>
          {toDateFormat(when)}
        </h6>
      </span>
      <span className='rdv__hour rdv__pad'>
        <h6 className='h6'>
          {toTimeFormat(when)}
        </h6>
      </span>
    </div>
    <div className='row'>
      <h6 className='h6'>
        <RdvFreeCount 
          count={count} 
          maxCount={maxCount} 
        />
      </h6>
    </div>
    <div className='row justify'>
      <h6 className='h6'>
        {title}
      </h6>
      <p className='p'>
        {where}
      </p>
    </div>
    <div className='row'>
      <RdvSubscription 
        id={id}
        userSubscribed={userSubscribed}
        wait4={wait4}
        count={count} 
        maxCount={maxCount} 
      />
    </div>
  </div>

export default RdvItem