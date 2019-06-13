import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const SmartInputRange = ({ value, isNegative, unity, onChange }) => {

  const prefix = (isNegative & value > 0) ? '-' : ''
  const suffix = unity ? unity : ''
  const label = `${prefix}${value}${suffix}`

  return <Slider
          min={0}
          max={100}
          value={value}
          tooltip={false}
          handleLabel={label}
          onChange={onChange}
        />
}

export default SmartInputRange