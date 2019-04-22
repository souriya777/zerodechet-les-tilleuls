import React from 'react'

const InputPretty = (props) => {
  // TODO required, min(max)length, pattern, readonly...
  const type = props.type ? props.type : 'text'
  console.log(type);

  return (
    <div className='input-pretty'>
      <span className='input-pretty__icon'>{props.children}</span>
      <input className='input-pretty__input' type={type} placeholder={props.placeholder} onChange={props.onChange} required />
    </div>
  )
}

export default InputPretty