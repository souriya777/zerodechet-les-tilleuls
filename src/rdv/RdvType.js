import React from 'react'

const RdvType = ({ type }) => {
  let extraClass, lbl
  if ('atelier' === type) {
    extraClass = 'rdv__workshop'
    lbl = 'Atelier'
  } else {
    extraClass = 'rdv__event'
    lbl = 'Événement'
  }

  return <span className={`rdv__pad ${extraClass}`}>
            <h6 className='h6'>
              {lbl}
            </h6>
          </span>
}

export default RdvType