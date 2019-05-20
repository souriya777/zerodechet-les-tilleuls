import UserFirebase from './userFirebase'

import { SIGNIN__ERROR_CODES, SIGNUP__ERROR_CODES } from '../utils/ErrorCodes'
import SigninException from '../utils/SigninException'
import SignupException from '../utils/SignupException'

class UserApi {

  signinWithLoginAndPwd = async (login, pwd) => {
    return signin('emailPwd', login, pwd)
  }

  signinWithGoogle = async () => {
    return signin('google')
  }
  
  signinWithFacebook = async () => {
    return signin('facebook')
  }
  
  signinWithTwitter = async () => {
    return signin('twitter')
  }
  
  signup = async (login, pwd, firstName, lastName) => {
    try {
      await UserFirebase.signup(login, pwd)
    } catch (error) {
      const errorMsg = SIGNUP__ERROR_CODES[error.code]
      throw new SignupException(errorMsg)
    }

    const extraInfo = this.generateExtraInfo(firstName, lastName)
    
    await UserFirebase.updateExtraInfo(extraInfo)
  }

  generateExtraInfo = (firstName, lastName) => {
    const name = displayName(firstName, lastName)
    return Object.assign({}, { name }, DEFAULT_EXTRA_INFO)
  }

  onAuthStateChanged = (callbackFn, callbackFn2) => {
    return UserFirebase.onAuthStateChanged(callbackFn, callbackFn2)
  }
  
  signout = async () => {
    return await UserFirebase.signout()
  }
  
  resetPwd = async (email) => {
    return await UserFirebase.resetPwd(email)
  }
}

export default new UserApi()


/////// PRIVATE METHODS

const displayName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}

const signin = (type, login, pwd) => {
  let user

  try {
    switch (type) {
      case 'google':
        UserFirebase.signinWithGoogle()
        break;
      case 'facebook':
        UserFirebase.signinWithFacebook()
        break;
      case 'twitter':
        UserFirebase.signinWithTwitter()
        break;
      default:
        UserFirebase.signin(login, pwd)
    }
  } catch (error) {
    const errorMsg = SIGNIN__ERROR_CODES[error.code]
    throw new SigninException(errorMsg)
  }

  return user
}

const DEFAULT_EXTRA_INFO = {
  goal: null,
  home: null,
  events: null,
}