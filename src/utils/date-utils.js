import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

/*
  For a date reset hours, minutes, seconds
  Eg. 
    date: Wednesday May 01, 2019 08:50:10 (am)
    becomes: Wednesday May 01, 2019 00:00:00 (am)
    final result: 1556661600
*/
export const unix = date => {
  return resetTime(moment(date)).unix()
}

export const firebaseTimestamp = date => {
  const timestamp = unix(date)
  return unixToFirebaseTimestamp(timestamp)
}

export const firebaseTimestampFromString = dateAsString => {
  const date = moment(dateAsString).toDate()
  const timestamp = unix(date)
  return unixToFirebaseTimestamp(timestamp)
}

export const getThisWeekDate = now => {
  if (! now) {
    return
  }

  const mNow = resetTime(moment(now))

  const monday = moment(mNow).isoWeekday(1)
  return {
    begin: monday.toDate(),
    end: now,
  }
}

const unixToFirebaseTimestamp = timestamp => {
  return new firebase.firestore.Timestamp(timestamp, 0)
}

const resetTime = momentObj => {
  return momentObj.hours(0).minutes(0).seconds(0)
}