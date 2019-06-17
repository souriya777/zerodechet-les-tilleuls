import React from 'react'
import { Field } from 'formik'

const SmartInput = ({ type, name, placeholder, errorMsg, sub, autocomplete, formikMode}) => {
  const valid = errorMsg === undefined
    ? 'input--valid'
    : 'input--invalid'

  return (
    <>
      <div className='input__container'>

        {formikMode 
          ? <Field 
              className={`input ${valid}`}
              type={type} 
              name={name} 
              placeholder={placeholder} 
              autoComplete={autocomplete}
            />
          : <input 
              className={`input ${valid}`}
              type={type} 
              name={name} 
              placeholder={placeholder} 
              autoComplete={autocomplete}
            />
        }
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