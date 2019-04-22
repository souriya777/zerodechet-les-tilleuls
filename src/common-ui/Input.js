import React from 'react'

const Input = (props) => {
  const id = props.id;
  const label = props.label;
  const type = props.type;

  return (
    <div className='form__field' key={id}>
      <input className="form__input" type={type} placeholder={label} id={id} onChange={props.handleInputChange} required />
    </div>
  )
}

export default Input;
