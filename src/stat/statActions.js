import weightAPI from '../weight/weightAPI'

export const LOAD_STAT = 'LOAD_STAT'

export const handleLoadStat = (uid, period) => {
  // const stat = weightAPI.fetchWeightList(period)
  const stat = 'TODO'

  return {
    type: LOAD_STAT,
    stat
  }
}