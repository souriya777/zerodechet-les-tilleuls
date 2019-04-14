import React from 'react'
import { Link } from 'react-router-dom'

const My404 = () => {
  return (
    <div className='my-404'>
      <h1 className="headings-1 u-margin-bottom-small">La page que vous cherchez n'existe pas.</h1>
      <p className='u-margin-bottom-medium'>Il est possible que vous ayez mal saisi l'adresse ou que la page ait été déplacée.</p>
      <Link className='btn btn--primary my-404__btn' to='/dashboard'>Retourner à la page d'accueil</Link>
    </div>
  )
}

export default My404;