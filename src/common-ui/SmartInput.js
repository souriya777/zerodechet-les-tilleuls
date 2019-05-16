import React from 'react'
import { Field } from 'formik'

const SmartInput = ({ type, name, placeholder, errorMsg, sub}) => {
  const invalid = errorMsg !== undefined
    ? 'input--invalid'
    : ''

  return (
    <>
      <div className='input__container'>
        <Field 
          className={`input ${invalid}`}
          type={type} 
          name={name} 
          placeholder={placeholder} 
        />

        <span className='input__border'></span>
        <label className='input__label'>{placeholder}</label>
      </div>

      <div className='input__sub input__error'>
        {errorMsg}
      </div>

      {sub !== undefined
        ? <div className='input__sub'>{sub}</div>
        : ''
      }
    </>
  )
}

export default SmartInput