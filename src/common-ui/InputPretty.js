import React from 'react'
// linked with formik library...
import { Field, ErrorMessage } from 'formik';

const InputPretty = (props) => {
  return (
    <>
      <div className='input-pretty'>
        <Field className='input-pretty__input' type={props.type} name={props.name} placeholder={props.placeholder} />
        <span className='input-pretty__icon'>{props.children}</span>
      </div>
      <div className='form-error'>
        <ErrorMessage name={props.name} />
      </div>
    </>
  )
}

export default InputPretty