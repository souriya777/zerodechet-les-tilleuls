import React from 'react'
import { connect } from 'react-redux'

import { findCityAvg } from '../utils/CityHelper'
import { convertGoalToAvg } from '../stat/StatHelper'

import SmartInputRange from '../common-ui/SmartInputRange'
import { convertAvgToGoal } from './StatHelper'

const StatChallenge = ({ title, value, city, goal, stat }) => {

  if (stat == null || stat.avg == null) {
    return <StatBloc 
              title='Mon objectif était de' 
              value={goal} 
              city={city} 
            />
  }
  
  const list = stat.avg
  const cityAvg = findCityAvg(city)

  const avgStat = list.reduce((acc, curr) => acc + curr) / list.length
  
  const curr = convertAvgToGoal(avgStat, cityAvg)

  return (
    <>
      <StatBloc 
        title='Mon objectif était de' 
        value={goal} 
        city={city} 
      />
      <StatBloc 
        title={`Aujourd'hui j'en suis`} 
        value={curr} 
        city={city} 
      />
    </>
  )
}

const StatBloc = ({ title, value, city }) => {
  const cityAvg = findCityAvg(city)
  const avg = convertGoalToAvg(value, cityAvg)

  return (
    <>
      <div className='bloc'>
        <h3 className='h3'>{title} :</h3>
      </div>
      <SmartInputRange value={value} isNegative={true} unity={'%'} disabled={true} />
      <div className='center'>
        <div>soit:</div>
        <h3 className='h3'>
          <div>{avg}kg/pers/an</div>
        </h3>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  const user  = state.user
  const city = user ? user.city : null
  const goal = user ? user.goal : 50

  return {
    city,
    goal,
    stat: state.stat
  }
}

export default connect(mapStateToProps)(StatChallenge)