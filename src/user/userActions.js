import { showLoading, hideLoading } from 'react-redux-loading'

import userAPI from '../user/userAPI'
import { setError } from '../utils/ErrorActions'

export const SET_USER = 'SET_USER'
export const SIGNOUT = 'SIGNOUT'

const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

const signout = () => {
  return {
    type: SIGNOUT
  }
}

const handleSignIn = (type, login, pwd) => {
  return async (dispatch) => {
    // dispatch(showLoading())

    try {
      switch (type) {
        case 'google' :
          await userAPI.signinWithGoogle()
          break
        case 'facebook':
          await userAPI.signinWithFacebook()
          break
        case 'twitter':
          await userAPI.signinWithTwitter()
          break
        default:
          await userAPI.signinWithLoginAndPwd(login, pwd)
      } 
    } catch (e) {
      dispatch(setError(e.message))
    } finally {
      // dispatch(hideLoading())
    }
  }
}

export const handleSigninWithEmailAndPwd = (login, pwd) => {
  return handleSignIn ('default', login, pwd)
}

export const handleSigninWithGoogle = () => {
  return handleSignIn ('google')
}

export const handleSigninWithFacebook = () => {
  return handleSignIn ('facebook')
}

export const handleSigninWithTwitter = () => {
  return handleSignIn ('twitter')
}

export const handleSignup = (firstName, lastName, login, pwd) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await userAPI.signup(login, pwd, firstName, lastName)
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}

export const handleSignout = () => {
  return async (dispatch) => {
    dispatch(showLoading())
    await userAPI.signout()
    dispatch(signout())
    dispatch(setUser(null))
    dispatch(hideLoading())
  }
}

export const handleResetPwd = email => {
  return async (dispatch) => {
    dispatch(showLoading())
    await userAPI.resetPwd(email)
    dispatch(hideLoading())
  }
}

export const handleUpdateUser = user => {
  return async (dispatch) => {
    try {
      dispatch(setUser(user))
    } catch (error) {
      dispatch(setError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}