import React from 'react'

const ButtonSocial = (props) => {
  const Component = props.icon

  return (
    <div className='btn-social'>
      <div className='btn-social__icon'><Component /></div>
      <div className='btn-social__legend'>{props.legend}</div>
    </div>
  )
}

export default ButtonSocial
