import statAPI from './statAPI'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setError } from '../utils/ErrorActions'

const moment = require('moment')

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
      // FIXME
      const now = moment('2019-05-10')
      const stat = await statAPI.getWeekData(uid, now.toDate())
      dispatch(fetchStat(stat))
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}