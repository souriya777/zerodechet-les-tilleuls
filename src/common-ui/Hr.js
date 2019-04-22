import React from 'react'

const Hr = (props) => {
  return (
    <div className='hr'>
        <span className='hr__content'>{props.text}</span>
    </div>
  )
}

export default Hr