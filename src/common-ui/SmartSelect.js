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
    const { name, options, ids, placeholder } = this.props

    return (
      <div className='select__wrapper'>
        <Field 
          component='select'
          className='select' 
          name={name}
        >
          {options.map((label, i) => 
            <option key={ids[i]} value={ids[i]}>{label}</option>
          )}
        </Field>
        <div className='select__icon'>
          <SVGTriangleDown />
        </div>
        <div className='select__placeholder'>{placeholder}</div>
      </div>
    )
  }
}

export default SmartSelect