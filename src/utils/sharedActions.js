import { showLoading, hideLoading } from 'react-redux-loading'

import sharedAPI from './sharedAPI'
import { setError } from '../utils/ErrorActions'

export const LOAD_DATA = 'LOAD_DATA'

export const handleLoadData = uid => {
  return async dispatch => {
    dispatch(showLoading())
    try {
      await sharedAPI.loadData(uid)
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}