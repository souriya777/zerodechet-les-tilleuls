import { showLoading, hideLoading } from 'react-redux-loading'

import sharedAPI from './sharedAPI'
import { setError } from '../utils/ErrorActions'
import ROUTES from '../app/routes'

export const LOAD_DATA = 'LOAD_DATA'
export const GOTO_STAT = 'GOTO_STAT'

export const handleLoadData = (uid, history) => {
  console.log('handleLoadData')
  return async dispatch => {
    dispatch(showLoading())
    try {
      await sharedAPI.loadData()

      // waiting for firebase...
      setTimeout(() => {
        dispatch(hideLoading())
        history.push(ROUTES.stat) // special case of direct redirecting from action
      }, 4000)
    } catch (error) {
      dispatch(setError(error.message))
    } 
  }
}