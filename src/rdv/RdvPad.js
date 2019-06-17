import React from 'react'

const RdvPad = ({ type }) => {
  return 'atelier' === type
  ? <div className='rdv__workshop'>Atelier</div>
  : <div className='rdv__event'>Événement</div>
}

export default RdvPad