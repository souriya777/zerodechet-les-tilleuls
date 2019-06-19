import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

const StatEmpty = ({ periodLabel, onMoreStat }) => 
  <>
    <div className='stat__empty'>Hmmm... vous n'avez pas encore saisi de données pour {periodLabel.toLowerCase()} !</div>

    <div className='stat__empty'>Commencez votre défi soit :</div>

    <div className='stat__empty'>
      1/ en <Link className='link link--active' to={ROUTES.weight}
  >saisissant votre 1ère pesée.</Link>
    </div>

    <div className='stat__empty'>
      2/ en appuyant sur le bouton ci-dessous pour charger un exemple de stats (vous pourrez les supprimer ultérieurement)
      <button 
        className='btn' 
        type='submit' 
        onClick={onMoreStat}
      >
        + de stats
      </button>
    </div>
  </>

export default StatEmpty