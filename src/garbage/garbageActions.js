import { showLoading, hideLoading } from 'react-redux-loading'
import API from '../app/api'
import { addError } from '../utils/ErrorActions'

export const ADD_WEIGHT = 'ADD_WEIGHT'

export const handleAddWeight = (nbPers, nbDays, totalWeight, date, type) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      const weight = await API.addWeight(nbPers, nbDays, totalWeight, date, type)
      console.log('actions', weight);
      
      return {
        type: ADD_WEIGHT,
      }
    } catch (error) {
      dispatch(addError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}