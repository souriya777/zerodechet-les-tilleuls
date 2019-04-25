import React from 'react'

const ButtonRich = (props) => {
  const Component = props.icon
  const color = props.color

  return (
    <div className='btn-rich'>
      <span className='btn-rich__icon' style={{fill: color}}>
        <Component />
      </span>
      <span className='btn-rich__text'>{props.children}</span>
    </div>
  )
}

export default ButtonRich
