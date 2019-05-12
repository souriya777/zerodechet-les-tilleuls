import React from 'react'
import { Field } from 'formik'

const SmartInput = ({ type, name, placeholder, errorMsg}) => {
  const invalid = errorMsg !== undefined
    ? 'input--invalid'
    : ''

  return (
    <>
      <Field 
        className={`input ${invalid}`}
        type={type} 
        name={name} 
        placeholder={placeholder} 
      />

      <div className='input__error'>
        {errorMsg}
      </div>
    </>
  )
}

export default SmartInput