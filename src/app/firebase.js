import React from 'react'
import app from 'firebase/app'
import 'firebase/auth'

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
  }

  // API
  signin = (email, pwd) => 
    this.auth.signInWithEmailAndPassword(email, pwd)

  signup = (email, pwd) => 
    this.auth.createUserWithEmailAndPassword(email, pwd)

  signout = () => this.auth.signOut()

  resetPwd = email => {console.log(email);this.auth.sendPasswordResetEmail(email)}

  updatePwd = pwd => this.auth.currentUser.updatePassword(pwd)

  updateProfile = name => {
    this.auth.currentUser.updateProfile({displayName: name})
    return this.auth.currentUser
  }
}

export const FirebaseContext = React.createContext(null)
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)
