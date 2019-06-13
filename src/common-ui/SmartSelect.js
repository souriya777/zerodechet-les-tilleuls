import React, { Component } from 'react'
import { Field } from 'formik'

import SVGTriangleDown from '../common-ui/svg/SVGTriangleDown'

// FIXME name in Stat

class SmartSelect extends Component {
  handleOnChange = e => {
    const { onChange } = this.props
    console.log(e.target.value)
  }

  render() {
    const { name, options, ids, placeholder, formikMode } = this.props

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
}

export default SmartSelect