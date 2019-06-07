import { showLoading, hideLoading } from 'react-redux-loading'

import statAPI from './statAPI'
import { PERIOD, DEFAUT_PERIOD } from './StatHelper'
import { setError } from '../utils/ErrorActions'

export const RESET_STAT = 'RESET_STAT'
export const SET_CURRENT_STAT = 'SET_CURRENT_STAT'
export const FETCH_STAT = 'FETCH_STAT'

const fetchStat = stat => {
  return {
    type: FETCH_STAT,
    stat
  }
}

// FIXME it is called by weightActions... how to manage cross-references?
export const resetStat = () => {
  return {
    type: RESET_STAT,
  }
}

export const setCurrentStat = nb => {
  return {
    type: SET_CURRENT_STAT,
    current: nb
  }
}

export const handleLoadCurrentStat = uid => {
  console.log('handleLoadCurrentStat')
  return async dispatch => {
    try {
      const result = await statAPI.getAllTimeAvg(uid)
      dispatch(setCurrentStat(result))
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleLoadStat = (uid, period = DEFAUT_PERIOD) => {
  console.log('handleLoadStat', period)

  return async dispatch => {
    dispatch(showLoading())
    let stat = null
    try {
      
      if (PERIOD.WEEK === period) {
        stat = await statAPI.getWeekData(uid, new Date())
      } else if (PERIOD.MONTH === period) {
        stat = await statAPI.getMonthData(uid, new Date())
      } else {
        stat = await statAPI.getTrimesterData(uid, new Date())
      }
      dispatch(fetchStat(stat))
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}