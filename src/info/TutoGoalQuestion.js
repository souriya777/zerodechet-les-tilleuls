import React from 'react'
import { connect } from 'react-redux'
import { CITY, CITY_LABEL, CITY_AVG } from '../utils/CityHelper'

const TutoGoalQuestion = ({ city, avg }) => 
  <>
    <div className='paragraph'>
      La production moyenne de déchets, à { city }, est de : {avg}kg/pers/an
    </div>
    <div className='tuto__question'>
      Quel est votre objectif de réduction?
    </div>
  </>

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  
  let cityLbl = null, cityAvg = null
  if (city) {
    const idx = CITY.indexOf(city)

    cityLbl = CITY_LABEL[idx]
    cityAvg = CITY_AVG[idx]
  }

  return {
    city: cityLbl,
    avg: cityAvg,
  }
}

export default connect(mapStateToProps)(TutoGoalQuestion)