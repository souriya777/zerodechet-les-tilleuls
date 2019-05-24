import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HighchartsWrapper from '../utils/HighchartsWrapper'

import ROUTES from '../app/routes'

const StatGraph = ({ stat }) => {
  console.log(stat);
  
  if (stat == null) {
    return <p className='stat__empty'>L'aventure commence ! Vous pouvez dès à présent <Link className='link link--active' to={ROUTES.weight}
  >saisir une pesée</Link>.</p>
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