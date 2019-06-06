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
        const userExtra = await this.getUserExtra(user)
        callbackFn(userExtra)

        this.addListenerToUserDoc(user, callbackFn)
        
      } else {
        callbackFn2()
      }
    })
  }

  addListenerToUserDoc = (user, callbackFn) => {
    Firebase.db.collection(USERS_REF).doc(user.uid)
    .onSnapshot(async doc => {
      const userExtra = await this.getUserExtra(user)
      callbackFn(userExtra)
    })
  }

  getUserExtra = async user => {
    let extra = await this.getExtraInfo(user)
    if (extra == null) {
      console.log('generateExtraInfo', user)
      await this.generateExtraInfo(filter(user).name)
      extra = await this.getExtraInfo(user)
    }
    
    return merge(filter(user), extra)
  }

  generateExtraInfo = async name => {
    const extraInfo = Object.assign({}, { name }, DEFAULT_EXTRA_INFO)
    await this.updateExtraInfo(extraInfo)
  }

  getExtraInfo = async user => {
    const doc = await Firebase.db.collection(USERS_REF).doc(user.uid).get()
    return doc.data()
  }

  setExtraInfo = async (field, value) => {
    const user = Firebase.auth.currentUser
    Firebase.db.collection(USERS_REF).doc(user.uid).update(
      {[field]: value}
    )
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
  isNew: true,
}

export default new UserFirebase()