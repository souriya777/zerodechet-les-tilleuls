import { firestore } from 'firebase'

const moment = require('moment')

const TIME_00 = 'T00:00:00'
export const DATE_FORMAT = 'YYYY-MM-DD'

export const toTimestamp = (input, regex = DATE_FORMAT) => {
  return moment(input, regex).unix()
}

export const toFirebaseTimestamp = (input) => {
  const date = new Date(input + TIME_00)
  return firestore.Timestamp.fromDate(date)
}