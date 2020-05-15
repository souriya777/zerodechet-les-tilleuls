import { showLoading, hideLoading } from 'react-redux-loading'
import weightAPI from './weightAPI'
import { setError } from '../utils/ErrorActions'
import { setInfo } from '../utils/InfoActions'
import { WEIGHT_MSG } from '../utils/InfoMsg'
import { resetStat } from '../stat/statActions'
import ROUTES from '../app/routes'


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

export const handleAddWeight = (uid, history, nbPers, startDate, endDate, recycled, norecycled) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      await weightAPI.addWeight(nbPers, startDate, endDate, recycled, norecycled)
      
      // waiting for firebase...
      setTimeout(() => {
        dispatch(hideLoading())
        history.push(ROUTES.stat) // special case of direct redirecting from action
      }, 800)
    } catch (error) {
      dispatch(setError(error.message))
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
      dispatch(resetStat())
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