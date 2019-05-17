import { showLoading, hideLoading } from 'react-redux-loading'
import userAPI from '../user/userAPI'
import { addError } from '../utils/ErrorActions'

export const SET_USER = 'SET_USER'
export const SIGNOUT = 'SIGNOUT'

const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

const fetchProfile = async(email) => {
  return await userAPI.fetchProfile(email)
}

const signout = () => {
  return {
    type: SIGNOUT
  }
}

// FIXME export
const completeUser = async user => {
  const profile = await fetchProfile(user.email)
  return Object.assign({}, user, profile)
}

const handleSignIn = (type, login, pwd) => {
  return async (dispatch) => {
    // dispatch(showLoading())
    let user

    try {
      
      switch (type) {
        case 'google' :
          user = await userAPI.signinWithGoogle()
          break
        case 'facebook':
          user = await userAPI.signinWithFacebook()
          break
        case 'twitter':
          user = await userAPI.signinWithTwitter()
          break
        default:
          user = await userAPI.signinUser(login, pwd)
      } 

      const userFull = await completeUser(user)
      dispatch(setUser(userFull))

    } catch (error) {
      dispatch(addError(error))
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
      let user = await userAPI.signupUser(login, pwd)
      user = await userAPI.updateProfile(firstName, lastName)
      dispatch(setUser(user))
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
      const userFull = await completeUser(user)
      console.log('userFull', userFull);
      dispatch(setUser(userFull))
    } catch (error) {
      dispatch(addError(error.message))
    } finally {
      dispatch(hideLoading())
    }
  }
}