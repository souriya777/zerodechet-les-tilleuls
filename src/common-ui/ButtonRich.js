import React from 'react'

const ButtonRich = (props) => {
  const Component = props.icon
  const color = props.color

  return (
    <div className='btn-rich' style={{color: color}}>
      <div className='btn-rich__icon' style={{fill: color}}>
        <Component />
        {props.children}
      </div>
      <div className='btn-rich__legend'>{props.legend}</div>
    </div>
  )
}

export default ButtonRich
