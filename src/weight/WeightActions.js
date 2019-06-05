import { showLoading, hideLoading } from 'react-redux-loading'
import weightAPI from '../weight/weightAPI'
import { setError } from '../utils/ErrorActions'
import { setInfo } from '../utils/InfoActions'
import { WEIGHT_MSG } from '../utils/InfoMsg'
import { setStat } from '../stat/statActions'


export const SET_WEIGHT = 'SET_WEIGHT'
export const ADD_WEIGHT = 'ADD_WEIGHT'
export const FETCH_LAST_START_DATE = 'FETCH_LAST_START_DATE'

const setWeight = w => {
  return {
    type: SET_WEIGHT,
    weight: w
  }
}

const fetchLastStartDate = startDate => {
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
      await weightAPI.addWeight(nbPers, startDate, endDate, recycled, norecycled)
      const w = await weightAPI.getLastWeight(uid)
      console.log(w)
      dispatch(fetchLastStartDate(w.startDate))
      dispatch(setInfo(WEIGHT_MSG.ADD_SUCCESS))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleRemoveAllWeight = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      await weightAPI.removeAllWeight()
      dispatch(setWeight(null))
      dispatch(setInfo(WEIGHT_MSG.REMOVE_ALL_SUCCESS))
      dispatch(setStat(null))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleGetLastStartDate = uid => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      const lastStartDate = await weightAPI.getLastStartDate(uid)
      dispatch(fetchLastStartDate(lastStartDate))
    } catch (error) {
      console.log(error)
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}