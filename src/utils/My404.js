import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import Button from '../common-ui/Button'

const My404 = () => {
  return (
    <div className='my-404'>
      <h1 className="h1">La page que vous cherchez n'existe pas.</h1>
      <p>Il est possible que vous ayez mal saisi l'adresse ou que la page ait été déplacée.</p>
      <Link className='link' to={ROUTES.welcome}><Button raised={true}>Retourner à la page d'accueil</Button></Link>
    </div>
  )
}

export default My404;