import { showLoading, hideLoading } from 'react-redux-loading'
import weightAPI from '../weight/weightAPI'
import { setError } from '../utils/ErrorActions'

export const ADD_WEIGHT = 'ADD_WEIGHT'

export const handleAddWeight = (uid, nbPers, startDate, endDate, recycled, norecycled) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      await weightAPI.addWeight(uid, nbPers, startDate, endDate, recycled, norecycled)
      
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