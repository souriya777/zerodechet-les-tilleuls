import React from 'react'

const RdvSubscription = ({ isSubscribed, count, maxCount }) => {
  const diff = maxCount - count

  if (isSubscribed)
    return <button className='btn btn--small rdv--unsub'>Se désinscrire</button>

  if (diff >= 1) 
    return <button className='btn btn--small rdv--sub'>S'inscrire</button>
  else 
    return <button className='btn btn--small rdv--wait'>Être sur liste d'attente</button>

}

export default RdvSubscription