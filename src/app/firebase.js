import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// TODO use React Environmental variables instead
// eg. REACT_APP_API_KEY=XXXXxxxx
const CONFIG = {
  apiKey: "AIzaSyCBqfPrMZsEHPPjbVbYfcEYFDfxz3IVC6Q",
  authDomain: "zerodechet-les-tilleuls.firebaseapp.com",
  databaseURL: "https://zerodechet-les-tilleuls.firebaseio.com",
  projectId: "zerodechet-les-tilleuls",
  storageBucket: "zerodechet-les-tilleuls.appspot.com",
  messagingSenderId: "1033039061894"
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
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Firebase(singletonEnforcer);
    }

    return this[singleton];
  }
}

export default Firebase.instance

export const USERS_REF = 'users'
export const WEIGHTS_REF = 'weights'
export const EVENTS_REF = 'events'