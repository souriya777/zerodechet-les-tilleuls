import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { TIME_00 } from '../utils/date-utils'

// FIXME
import weights from '../utils/_DATA-WEIGHT.json'

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
    firebase.initializeApp(config);

    this.auth = firebase.auth()
    this.db = firebase.firestore()
    this.googleProvider = new firebase.auth.GoogleAuthProvider()
    this.facebookProvider = new firebase.auth.FacebookAuthProvider()
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
  toFirebaseTimestamp = (input) => {
    const date = new Date(input + TIME_00)
    return firebase.firestore.Timestamp.fromDate(date)
  }

  // LOAD DATA
  loadData = async () => {
    console.log('-------LOAD WEIGHT DATA----------')
    console.group()

    const DOC_IDS = []

    // fetching all existing doc
    console.log('FETCHING')
    await this.db.collection('weight').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          DOC_IDS.push(doc.id)
      })
    })
    console.log(DOC_IDS, DOC_IDS.length)
    
    console.log('DELETING')
    // deleting all doc
    DOC_IDS.forEach((id) => {
      this.db.collection('weight').doc(id).delete().then(() => {
        console.log('DELETE', id)
      }).catch((error) => {
        console.error(`ERROR when deleteting ${id} `, error)
      })
    })

    // populate
    console.log('WRITING')
    console.group()
    weights.forEach((w) => {
      const timestamp = this.toFirebaseTimestamp(w.startDate)
      const firebaseDoc = Object.assign(w, {startDate: timestamp})
      this.db.collection('weight').add(firebaseDoc)
      console.log('WRITE', firebaseDoc)
    })
    console.groupEnd()
    
    // test
    console.log('READING ALL DOC FROM USER')
    this.db.collection('weight')
      .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log('READ UID', doc.id, " => ", doc.data());
        })
      })
    
    // test
    console.log('READING ALL DOC FROM USER, BETWEEN DATE 01/04/19 AND 30/04/19')
    this.db.collection('weight')
      .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
      .where('startDate', '>=', this.toFirebaseTimestamp('2019-04-01'))
      .where('startDate', '<', this.toFirebaseTimestamp('2019-05-01'))
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log('READ UID & DATE', doc.id, " => ", doc.data());
        })
      })

    console.groupEnd()
  }
}