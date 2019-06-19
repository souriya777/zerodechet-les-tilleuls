import React from 'react'
import { connect } from 'react-redux'

import { findCityAvg } from '../utils/CityHelper'
import { convertGoalToAvg } from '../stat/StatHelper'

import SmartInputRange from '../common-ui/SmartInputRange'

const StatChallenge = ({ goal, avg }) => 
  <>
    <div className='bloc'>
      <h3 className='h3'>Mon défi :</h3>
    </div>
    <SmartInputRange value={goal} isNegative={true} unity={'%'} disabled={true} />
    <div className='center'>
      <div>soit:</div>
      <h3 className='h3'>
        <div>{avg}kg/pers/an</div>
      </h3>
    </div>
  </>

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  const goal = user ? user.goal : 50
  
  const cityAvg = findCityAvg(city)
  const avg = convertGoalToAvg(goal, cityAvg)

  return {
    goal,
    avg,
  }
}

export default connect(mapStateToProps)(StatChallenge)