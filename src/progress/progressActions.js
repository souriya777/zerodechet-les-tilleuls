import API from '../app/api'

export const LOAD_PROGRESS = 'LOAD_PROGRESS'

export const handleLoadProgress = (period) => {
  const progress = API.fetchProgress(period)

  return {
    type: LOAD_PROGRESS,
    progress
  }
}