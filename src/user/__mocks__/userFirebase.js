import { 
  VALID_EMAIL, 
  VALID_PWD, 
  VALID_FIREBASE_USER,
  VALID_FIREBASE_EXTRA_INFO,
  ALREADY_EXIST_EMAIL,
  VALID_API_USER_SIGNUP,
} from './userData'

class UserFirebase {
  signin = (login, pwd) => {
    if (VALID_EMAIL === login) {
      if (VALID_PWD === pwd) {
        return VALID_FIREBASE_USER 
      } else {
        throw new FirebaseError('auth/wrong-password')
      }
    } else {
      throw new FirebaseError('auth/user-not-found')
    }
  }

  signinWithGoogle = () => {
    return VALID_FIREBASE_USER
  }

  signinWithFacebook = () => {
    return VALID_FIREBASE_USER
  }

  signinWithTwitter = () => {
    return VALID_FIREBASE_USER
  }

  signup = (login, pwd) => {
    if (ALREADY_EXIST_EMAIL === login) {
      throw new FirebaseError('auth/email-already-in-use')
    }
  }

  onAuthStateChanged = (callbackFn, callbackFn2) => {
    callbackFn(VALID_API_USER_SIGNUP)
    callbackFn2() 
  }

  updateExtraInfo = (user, info) => { jest.fn() }
  

  getExtraInfo = async email => {
    return VALID_FIREBASE_EXTRA_INFO
  }

  filter = firebaseUser => {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.displayName,
      photo: firebaseUser.photoURL,
    }
  }
}

class FirebaseError extends Error {
  constructor(code) {
    super('mock firebase error')
    this.code = code
  }
}

export default new UserFirebase()