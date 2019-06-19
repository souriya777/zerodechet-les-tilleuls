import { showLoading, hideLoading } from 'react-redux-loading'

import rdvAPI from './rdvAPI'
import { setError } from '../utils/ErrorActions'

export const SET_RDV = 'SET_RDV'
export const SET_RDV_LIST = 'SET_RDV_LIST'
export const REMOVE_RDV = 'REMOVE_RDV'

const setRdv = rdv => {
  return {
    type: SET_RDV,
    rdv
  }
}

const setRdvList = rdvList => {
  return {
    type: SET_RDV_LIST,
    rdvList
  }
}

const removeRdv = id => {
  return {
    type: REMOVE_RDV,
    rdvId: id
  }
}

export const handleGetRdvList = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      // call API
      const rdvList = await rdvAPI.getRdvList()
      dispatch(setRdvList(rdvList))
    } catch (error) {
      console.log(error)
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleSubRdv = id => {
  return async dispatch => {
    await rdvAPI.subRdv(id)
    dispatch(setRdv({ rdvId: id, waiting: false}))
  }
}

export const handleUnsubRdv = id => {
  return async dispatch => {
    await rdvAPI.unsubRdv(id)
    dispatch(removeRdv(id))
  }
}

export const handleWaitRdv = id => {
  return async dispatch => {
    await rdvAPI.waitRdv(id)
    dispatch(setRdv({ rdvId: id, waiting: true}))
  }
}