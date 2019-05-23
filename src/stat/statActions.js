import statAPI from './statAPI'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setError } from '../utils/ErrorActions'

export const FETCH_STAT = 'FETCH_STAT'

const fetchStat = stat => {
  return {
    type: FETCH_STAT,
    stat
  }
}

export const handleLoadStat = (uid, period) => {
  return async dispatch => {
    dispatch(showLoading())

    try {
      const stat = await statAPI.getWeekData(uid, new Date())
      
      dispatch(fetchStat(stat))
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}