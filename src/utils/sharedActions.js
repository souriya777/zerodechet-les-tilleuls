import { showLoading, hideLoading } from 'react-redux-loading'

import sharedAPI from './sharedAPI'
import { setError } from '../utils/ErrorActions'
import { handleLoadStat } from '../stat/statActions'
import { handleGetLastStartDate } from '../weight/weightActions'
import ROUTES from '../app/routes'

export const LOAD_DATA = 'LOAD_DATA'
export const GOTO_STAT = 'GOTO_STAT'

export const handleLoadData = (uid, history) => {
  return async dispatch => {
    dispatch(showLoading())
    try {
      await sharedAPI.loadData()

      // waiting for firebase...
      setTimeout(() => {
        dispatch(handleLoadStat(uid))
        dispatch(handleGetLastStartDate(uid))
        dispatch(hideLoading())
        history.push(ROUTES.stat) // special case of direct redirecting from action
      }, 4000)


    } catch (error) {
      dispatch(setError(error.message))
    } 
  }
}