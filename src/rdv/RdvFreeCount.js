import React from 'react'

const RdvFreeCount = ({ count, maxCount }) => {
  const freeCount = maxCount - count
  let countLbl = null
  let extraClass = null
  if (freeCount === 0) {
    countLbl = 'Plus de places disponibles'
    extraClass = 'rdv__free--full'
  } else if (freeCount === 1) {
    countLbl = '1 place disponible'
    extraClass = 'rdv__free--single'
  } else {
    countLbl = `${freeCount} places disponibles`
    extraClass = 'rdv__free--few'
  }

  return (
    <span className={`${extraClass} rdv__pad`}>
      {countLbl}
    </span>
  )
}

export default RdvFreeCount