import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

const StatEmpty = ({ periodLabel }) => 
  <>
    <p className='stat__empty'>Hmmm... vous n'avez pas encore saisi de données pour {periodLabel.toLowerCase()} !</p>
    <p className='stat__empty'>Commençons notre défi 0 déchet en  <Link className='link link--active' to={ROUTES.weight}
  >saisissant notre 1ère pesée.</Link></p>
  </>

export default StatEmpty