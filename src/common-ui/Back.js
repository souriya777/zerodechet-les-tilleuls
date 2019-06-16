import React from 'react'

import SVGBackArrow from '../common-ui/svg/SVGBackArrow'

const Back = ({ action }) => 
  <div className='back' onClick={action}>
    <SVGBackArrow />
  </div>

export default Back