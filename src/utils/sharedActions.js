import { showLoading, hideLoading } from 'react-redux-loading'

import sharedAPI from './sharedAPI'
import { setError } from '../utils/ErrorActions'
import { handleLoadStat } from '../stat/statActions'
import ROUTES from '../app/routes'

export const LOAD_DATA = 'LOAD_DATA'
export const GOTO_STAT = 'GOTO_STAT'

export const handleLoadData = (uid, history) => {
  return async dispatch => {
    dispatch(showLoading())
    try {
      await sharedAPI.loadData(uid)

      // waiting for firebase...
      setTimeout(() => {
        dispatch(handleLoadStat(uid, undefined))
        dispatch(hideLoading())
        goto(ROUTES.stat, history)
      }, 5000)


    } catch (error) {
      dispatch(setError(error.message))
    } 
  }
}

export const goto = (route, history) => {
  history.push(route)
}