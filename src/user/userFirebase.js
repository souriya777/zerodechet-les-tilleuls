import Firebase, { USERS_REF }  from '../app/firebase'

class UserFirebase {
  signin = (email, pwd) =>
    Firebase.auth.signInWithEmailAndPassword(email, pwd)
  
  signinWithGoogle = () => Firebase.auth.signInWithPopup(Firebase.googleProvider)
  
  signinWithFacebook = () => Firebase.auth.signInWithPopup(Firebase.facebookProvider)
  
  signinWithTwitter = () => Firebase.auth.signInWithPopup(Firebase.twitterProvider)
  
  signup = (email, pwd) => 
    Firebase.auth.createUserWithEmailAndPassword(email, pwd)
  
  signout = () => Firebase.auth.signOut()
  
  resetPwd = email => Firebase.auth.sendPasswordResetEmail(email)
  
  onAuthStateChanged = (callbackFn, callbackFn2) => {
    Firebase.auth.onAuthStateChanged(async user => {
      
      if (user) {
        const extra = await this.getExtraInfo(user)
        const userExtra = merge(filter(user), extra)

        callbackFn(userExtra)
      } else {
        callbackFn2()
      }

    })
  }

  getExtraInfo = async user => {
    const doc = await Firebase.db.collection(USERS_REF).doc(user.uid).get()

    return doc.data()
  }
    
  updateExtraInfo = info => {
    const user = Firebase.auth.currentUser
    
    Firebase.db.collection(USERS_REF).doc(user.uid).set(
      Object.assign({}, { uid: user.uid }, info)
    )
  }
}

// PRIVATE METHODS
const filter = firebaseUser => {
  return {
    uid: firebaseUser.uid,
    // name: firebaseUser.displayName,
    photo: firebaseUser.photoURL,
  }
}

const merge = (user, extra) => {
  return Object.assign({}, user, extra)
}

export default new UserFirebase()