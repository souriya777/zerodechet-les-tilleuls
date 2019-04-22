import { showLoading, hideLoading } from 'react-redux-loading'
import API from '../utils/api'
import { addError } from '../utils/ErrorActions'

export const GET_USER = 'GET_USER'
export const SIGNOUT = 'SIGNOUT'

const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

const removeUser = (user) => {
  return {
    type: GET_USER,
    user: null
  }
}

const signout = () => {
  return {
    type: SIGNOUT
  }
}

export const handleSignin = (login, pwd) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const user = await API.signinUser(login, pwd)
      dispatch(getUser(user))
    } catch (error) {
      dispatch(addError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleSignup = (name, login, pwd) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      let user = await API.signupUser(login, pwd)
      user = await API.updateProfile(name)
      dispatch(getUser(user))
    } catch (error) {
      dispatch(addError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleSignout = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    await API.signout()
    dispatch(signout())
    dispatch(removeUser())
    dispatch(hideLoading())
  }
}

export const handleResetPwd = email => {
  return async (dispatch) => {
    dispatch(showLoading())
    await API.resetPwd(email)
    dispatch(hideLoading())
  }
}