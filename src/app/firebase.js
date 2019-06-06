import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

/*
  Use SINGLETON in order to play with Firebase

  use: 
  1/ const INSTANCE = Firebase.instance
  INSTANCE.method()

  2/ Firebase.staticMethod()

  @see: https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae
*/
const singleton = Symbol()
const singletonEnforcer = Symbol()


class Firebase {

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }
    this._type = 'Firebase'

    // load firebase config
    firebase.initializeApp(CONFIG)

    // initialize firebase objects needed
    this.auth = firebase.auth()
    this.db = firebase.firestore()
    this.googleProvider = new firebase.auth.GoogleAuthProvider()
    this.facebookProvider = new firebase.auth.FacebookAuthProvider()
    this.twitterProvider = new firebase.auth.TwitterAuthProvider()
  }

  get batch () {
    return this.db.batch()
  }

  static get instance() {
    if (this[singleton] == null) {
      this[singleton] = new Firebase(singletonEnforcer);
    }

    return this[singleton];
  }

  fetchExistingDocs = async ref => {
    let result = []
    await this.db.collection(ref).get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        result.push(doc.id)
      })
    })
    return result
  }
}

export default Firebase.instance

export const USERS_REF = 'users'
export const WEIGHTS_REF = 'weights'
export const EVENTS_REF = 'events'
export const SUB_COLLECTION_REF = 'sub'
