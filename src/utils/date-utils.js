import firebase from 'firebase/app'
import 'firebase/firestore'

const moment = require('moment')

export const TIME_00 = 'T00:00:00'
export const DATE_FORMAT = 'YYYY-MM-DD'

// @deprecated
export const toTimestamp = (input, regex = DATE_FORMAT) => {
  return moment(input, regex).unix()
}

export const generateFirebaseTimestamp = seconds => {
  return new firebase.firestore.Timestamp(seconds, 0)
}