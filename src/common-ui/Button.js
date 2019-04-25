import React from 'react'

const Button = (props) => {
  const Component = props.icon
  const color = props.color
  
  const raised = props.raised ? 'btn--raised' : ''
  const longText = props.lgTxt || props.icon ? 'btn--long-text' : ''

  return (
    <div className={`btn ${raised} ${longText}`} onClick={props.onSubmit}>
      <span className='btn__icon' style={{fill: color}}>
        { props.icon ? <Component /> : '' }
      </span>
      <span className='btn__text'>{props.children}</span>
    </div>
  )
}

export default Button
