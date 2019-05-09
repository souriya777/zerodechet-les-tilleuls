import { showLoading, hideLoading } from 'react-redux-loading'
import API from '../app/api'
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

const fetchProfile = async(email) => {
  return await API.fetchProfile(email)
}

const signout = () => {
  return {
    type: SIGNOUT
  }
}

const handleSignIn = (type, login, pwd) => {
  return async (dispatch) => {
    // dispatch(showLoading())
    let user

    try {
      
      switch (type) {
        case 'google' :
          user = await API.signinWithGoogle()
          break
        case 'facebook':
          user = await API.signinWithFacebook()
          break
        default:
          user = await API.signinUser(login, pwd)
      } 

      const profile = await fetchProfile(user.email)
      const newUser = Object.assign({}, user, profile)

      dispatch(getUser(newUser))

    } catch (error) {
      dispatch(addError(error.message))
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


export const handleSignup = (firstName, lastName, login, pwd) => {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      let user = await API.signupUser(login, pwd)
      user = await API.updateProfile(firstName, lastName)
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