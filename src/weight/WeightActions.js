import { showLoading, hideLoading } from 'react-redux-loading'
import weightAPI from '../weight/weightAPI'
import { setError } from '../utils/ErrorActions'
import { setInfo } from '../utils/InfoActions'
import { WEIGHT_MSG } from '../utils/InfoMsg'


export const ADD_WEIGHT = 'ADD_WEIGHT'
export const FETCH_LAST_START_DATE = 'FETCH_LAST_START_DATE'

const fetchLastStartDate = (startDate) => {
  return {
    type: FETCH_LAST_START_DATE,
    lastStartDate: startDate,
  }
}

export const handleAddWeight = (uid, nbPers, startDate, endDate, recycled, norecycled) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      await weightAPI.addWeight(uid, nbPers, startDate, endDate, recycled, norecycled)
      
      dispatch(setInfo(WEIGHT_MSG.ADD_SUCCESS))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleGetLastStartDate = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      const lastStartDate = await weightAPI.handleGetLastStartDate()
      dispatch(fetchLastStartDate(lastStartDate))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}