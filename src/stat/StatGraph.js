import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HighchartsWrapper from '../utils/HighchartsWrapper'

import ROUTES from '../app/routes'

const StatGraph = ({ stat, periodLabel }) => {
  if (stat == null) {
    return (
      <>
        <p className='stat__empty'>Hmmm... vous n'avez pas encore saisi de données pour {periodLabel.toLowerCase()} !</p>
        <p className='stat__empty'>Commençons notre défi 0 déchet en  <Link className='link link--active' to={ROUTES.weight}
      >saisissant notre 1ère pesée.</Link></p>
      </>
    )
  } 
  
  return (
    <HighchartsWrapper 
      categories={stat.categories} 
      recycled={stat.recycled} 
      norecycled={stat.norecycled} 
      avg={stat.avg}
    />
  )
}

const mapStateToProps = state => ({stat: state.stat})

export default connect(mapStateToProps)(StatGraph)