import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'

const ProgressEmpty = () => (
  <>
    Il semblerait que vous n'ayez pas saisi de pesée.
    <Link className='link link--active' to={ROUTES.garbage} >Commencer :)</Link>
  </>
)

export default ProgressEmpty