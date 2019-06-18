import React from 'react'
import { connect } from 'react-redux'
import { CITY } from '../utils/CityHelper'

const TutoGoalQuestion = ({ city, avg }) => 
  <>
    <div className='center'>
      <h4 className='h4 quote'>
        La production moyenne de déchets, à { city }, est de : {avg}kg/pers/an
      </h4>
    </div>
    <div className='center'>
      <h3 className='h3'>
        Quel est votre objectif de réduction?
      </h3>
    </div>
  </>

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  
  let cityLbl = null, cityAvg = null
  if (city) {
    const idx = CITY.keyList.indexOf(city)

    cityLbl = CITY.labelList[idx]
    cityAvg = CITY.avgList[idx]
  }

  return {
    city: cityLbl,
    avg: cityAvg,
  }
}

export default connect(mapStateToProps)(TutoGoalQuestion)