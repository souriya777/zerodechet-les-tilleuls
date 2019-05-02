import app from 'firebase/app'
import 'firebase/auth'
import { firestore } from 'firebase'

import { TIME_00 } from '../utils/date-utils'

const config = {
  // TODO use React Environmental variables instead
  // eg. REACT_APP_API_KEY=XXXXxxxx
  apiKey: "AIzaSyCBqfPrMZsEHPPjbVbYfcEYFDfxz3IVC6Q",
  authDomain: "zerodechet-les-tilleuls.firebaseapp.com",
  databaseURL: "https://zerodechet-les-tilleuls.firebaseio.com",
  projectId: "zerodechet-les-tilleuls",
  storageBucket: "zerodechet-les-tilleuls.appspot.com",
  messagingSenderId: "1033039061894"
}

/*
Provide an API, instead of using directly Firebase
*/
export class Firebase {
  constructor () {
    app.initializeApp(config);

    this.auth = app.auth()
    this.db = app.firestore()
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()

    this.INSTANCE = undefined
  }

  static get INSTANCE () {
    if (this.INSTANCE === undefined) {
      this.INSTANCE = new Firebase()
    }
    return this.INSTANCE
  }



  // USER API
  signin = (email, pwd) => 
    this.auth.signInWithEmailAndPassword(email, pwd)

  signinWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

  signinWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)

  signup = (email, pwd) => 
    this.auth.createUserWithEmailAndPassword(email, pwd)

  signout = () => this.auth.signOut()

  resetPwd = email => this.auth.sendPasswordResetEmail(email)

  updatePwd = pwd => this.auth.currentUser.updatePassword(pwd)

  updateProfile = name => {
    this.auth.currentUser.updateProfile({displayName: name})
    return this.auth.currentUser
  }

  getUser = uid => this.db.doc(`users/${uid}`)

  getUsers = () => this.db.collection('users')



  // WEIGHT API
  weight = uid => this.db.doc(`weights/${uid}`)

  weights = () => this.db.collection('weights')

  addWeight = (data) => {
    const collection = this.db.collection('weight')
    return collection.add(data)
  }



  // OTHERS API
  static toFirebaseTimestamp = (input) => {
    const date = new Date(input + TIME_00)
    return firestore.Timestamp.fromDate(date)
  }
}