import React from 'react'

const RdvType = ({ type }) => {
  return 'atelier' === type
  ? <span className='rdv__workshop rdv__pad'>Atelier</span>
  : <span className='rdv__event rdv__pad'>Événement</span>
}

export default RdvType