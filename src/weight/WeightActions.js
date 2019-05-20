import { showLoading, hideLoading } from 'react-redux-loading'
import weightAPI from '../weight/weightAPI'
import { setError } from '../utils/ErrorActions'

export const ADD_WEIGHT = 'ADD_WEIGHT'

export const handleAddWeight = (nbPers, nbDays, totalWeight, date, type) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      await weightAPI.addWeight(nbPers, nbDays, totalWeight, date, type)
      
      return {
        type: ADD_WEIGHT,
      }
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}