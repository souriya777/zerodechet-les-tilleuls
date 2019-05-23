import firebase from 'firebase/app'
import 'firebase/firestore'
const moment = require('moment')

export const TIME_00 = 'T00:00:00'
export const DATE_FORMAT = 'YYYY-MM-DD'

export const generateFirebaseTimestamp = date => {
  const seconds = Math.floor(date.getTime() / 1000)
  return new firebase.firestore.Timestamp(seconds, 0)
}

export const generateFirebaseTimestampFromString = dateAsString => {
  const date = moment(dateAsString).toDate()
  return generateFirebaseTimestamp(date)
}

export const getThisWeekDate = now => {
  if (! now) {
    return
  }

  const monday = moment(now).isoWeekday(1)
  return {
    begin: monday.toDate(),
    end: now,
  }
}