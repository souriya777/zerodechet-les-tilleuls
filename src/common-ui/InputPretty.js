import React from 'react'
// linked with formik library...
import { Field, ErrorMessage } from 'formik';
import IconArrowBottom from '../common-ui/IconArrowBottom'

const InputPretty = (props) => (
  <>
    <div className='input-pretty'>
      { props.type === 'select'
        ? <>
            <Field 
              className='input-pretty__select' 
              component="select" 
              name={props.name} 
              value={props.value}
              onChange={props.onChange}
            >
              {props.options}
            </Field>
            <span className='input-pretty__icon-arrow'><IconArrowBottom /></span>
          </>
        : <Field 
            className='input-pretty__input' 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder} />
      }
      
      <span className='input-pretty__icon'>{props.children}</span>
    </div>
    <div className='form-error'>
      <ErrorMessage name={props.name} />
    </div>
  </>
)

export default InputPretty