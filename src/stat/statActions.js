import { showLoading, hideLoading } from 'react-redux-loading'

import statAPI from './statAPI'
import { PERIOD } from './StatHelper'
import { setError } from '../utils/ErrorActions'

export const FETCH_STAT = 'FETCH_STAT'

const fetchStat = stat => {
  return {
    type: FETCH_STAT,
    stat
  }
}

export const handleLoadStat = (uid, period = PERIOD.WEEK) => {


  return async dispatch => {
    dispatch(showLoading())
    let stat = null

    try {
      if (PERIOD.WEEK === period) {
        stat = await statAPI.getWeekData(uid, new Date())
      } else if (PERIOD.MONTH === period) {
        console.log('TODO month')
        stat = await statAPI.getWeekData(uid, new Date())
      } else {
        console.log('TODO trimester')
        stat = await statAPI.getWeekData(uid, new Date())
      }

      dispatch(fetchStat(stat))
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}