import weightAPI from '../weight/weightAPI'

export const LOAD_PROGRESS = 'LOAD_PROGRESS'

export const handleLoadProgress = (period) => {
  const progress = weightAPI.fetchWeightList(period)

  return {
    type: LOAD_PROGRESS,
    progress
  }
}