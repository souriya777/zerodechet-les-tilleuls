import React from 'react'

import IconUser2 from '../common-ui/icons/IconUser2'

const Portrait = (props) => {
  return (
    <div className='portrait'>
      {props.photo !== null
        ? <img src={props.photo} alt='user profile' />
        : <IconUser2 />
      }
    </div>
  )
}

export default Portrait