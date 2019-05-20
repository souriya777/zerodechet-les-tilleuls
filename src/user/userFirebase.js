import Firebase, { USERS_REF }  from '../app/firebase'

class UserFirebase {
  signin = async (email, pwd) => Firebase.auth.signInWithEmailAndPassword(email, pwd)
  
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
        
        let extra = await this.getExtraInfo(user)
        console.log('getExtraInfo', extra)
        if (! extra) {
          console.log('generateExtraInfo', user)
          await this.generateExtraInfo(filter(user).name)
          extra = await this.getExtraInfo(user)
        }
        
        const userExtra = merge(filter(user), extra)
        callbackFn(userExtra)
      } else {
        callbackFn2()
      }

    })
  }

  getExtraInfo = async user => {
    const doc = await Firebase.db.collection(USERS_REF).doc(user.uid).get()
    console.log(doc.data())
    return doc.data()
  }
    
  updateExtraInfo = info => {
    const user = Firebase.auth.currentUser
    Firebase.db.collection(USERS_REF).doc(user.uid).set(
      Object.assign({}, { uid: user.uid }, info)
    )
  }

  generateExtraInfo = async name => {
    const extraInfo = Object.assign({}, { name }, DEFAULT_EXTRA_INFO)
    await this.updateExtraInfo(extraInfo)
  }
}

// PRIVATE METHODS
const filter = firebaseUser => {
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    photo: firebaseUser.photoURL,
  }
}

const merge = (user, extra) => {
  return Object.assign({}, user, extra)
}

const DEFAULT_EXTRA_INFO = {
  goal: null,
  home: null,
  events: null,
}

export default new UserFirebase()