import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { TIME_00 } from '../utils/date-utils'

// FIXME
import weightsJSON from '../utils/_DATA-WEIGHT.json'
import userJSON from '../utils/_DATA-USER.json'

const WEIGHTS_REF = 'weights'
const USERS_REF = 'users'

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

  getUser = uid => this.db.doc(`${USERS_REF}/${uid}`)

  getUsers = () => this.db.collection(USERS_REF)



  // WEIGHT API
  weight = uid => this.db.doc(`${WEIGHTS_REF}/${uid}`)

  weights = () => this.db.collection(WEIGHTS_REF)

  addWeight = (data) => {
    const collection = this.db.collection(WEIGHTS_REF)
    return collection.add(data)
  }



  // OTHERS API
  toFirebaseTimestamp = (input) => {
    const date = new Date(input + TIME_00)
    console.log(date);
    
    return firebase.firestore.Timestamp.fromDate(date)
  }








  // LOAD DATA
  loadDataWeight = async() => {
    this.loadData(WEIGHTS_REF, weightsJSON, this.convertWeight)
  }

  loadDataUser = async() => {
    this.loadData(USERS_REF, userJSON, this.convertUser)
  }
  

  loadData = async (ref, json, convertFn) => {
    console.log(`-------LOAD ${ref.toUpperCase()} DATA----------`)
    console.group()

    // fetching all existing doc
    const DOC_IDS = await this.fetchExistingDocs(ref)
    
    // delete existing docs
    this.deleteDocs(DOC_IDS, ref)

    // populate
    this.populate(json, ref, convertFn)
    
    console.groupEnd()
  }
  //////////////

  fetchExistingDocs = async (ref) => {
    console.log('FETCHING...')
    let result = []
    await this.db.collection(ref).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          result.push(doc.id)
      })
    })
    return result
  }

  deleteDocs = async (docs, ref) => {
    console.log('DELETING...')
    // deleting all doc
    docs.forEach((id) => {
      this.db.collection(ref).doc(id).delete().then(() => {
        console.group()
        console.log('DELETE', id)
        console.groupEnd()
      }).catch((error) => {
        console.error(`ERROR when deleteting ${id} `, error)
      })
    })
  }

  populate = async(json, ref, convertFn) => {
    console.log('WRITING...', ref, json)
    json.forEach((w) => {
      const firebaseDoc = convertFn(w)
      this.db.collection(ref).add(firebaseDoc)
      console.log('WRITE', firebaseDoc)
    })
  }

  ///////

  convertWeight = weight => {
    const timestamp = this.toFirebaseTimestamp(weight.startDate)
    return Object.assign(weight, {startDate: timestamp})
  }

  convertUser = user => {
    return Object.assign(user)
  }

  /////
  testReadAllWeights = (ref) => {
    console.log('READING ALL WEIGHTS')
    this.db.collection(ref)
      .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.group()
          console.log('READ UID', doc.id, " => ", doc.data())
          console.groupEnd()
        })
      })
  }

  testReadAllWeightsBtwDates = (ref) => {
    console.log('READING ALL WEIGHTS, BETWEEN DATE 01/04/19 AND 30/04/19')
    this.db.collection(ref)
      .where('uid', '==', 'fs8989Fdfqfdsfdsfqsdfsq')
      .where('startDate', '>=', this.toFirebaseTimestamp('2019-04-01'))
      .where('startDate', '<', this.toFirebaseTimestamp('2019-05-01'))
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.group()
          console.log('READ UID & DATE', doc.id, " => ", doc.data())
          console.groupEnd()
        })
      })
  }

}