import React from 'react'

import SVGTriangleDown from '../common-ui/svg/SVGTriangleDown'

const SmartSelect = ({ options, ids, placeholder, onChange }) => 
  <div className='select__wrapper'>
    <select className='select' onChange={onChange}>
      {options.map((label, i) => 
        <option key={ids[i]} value={ids[i]}>{label}</option>
      )}
    </select>
    <div className="select__icon">
      <SVGTriangleDown />
    </div>
    <div className='select__placeholder'>{placeholder}</div>
  </div>


export default SmartSelect