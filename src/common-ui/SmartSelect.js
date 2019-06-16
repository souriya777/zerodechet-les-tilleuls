import React from 'react'
import { Field } from 'formik'

import SVGTriangleDown from '../common-ui/svg/SVGTriangleDown'

const SmartSelect = ({ name, options, ids, placeholder, formikMode, onChange }) => {
  const optionList = options.map((label, i) => 
    <option key={ids[i]} value={ids[i]}>{label}</option>
  )

  return (
    <div className='select__wrapper'>

      {formikMode 
        ? <Field 
            component='select'
            className='select' 
            name={name}
          >
            {optionList}
          </Field>
        : <select 
            className='select' 
            name={name}
            onChange={onChange}
          >
            {optionList}
          </select>
      }
      <div className='select__icon'>
        <SVGTriangleDown />
      </div>
      <div className='select__placeholder'>{placeholder}</div>
    </div>
  )
}

export default SmartSelect