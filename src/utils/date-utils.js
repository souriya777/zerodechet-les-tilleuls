import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'
import { PERIOD } from '../stat/StatHelper'

export const DEFAULT_START_DATE = moment('1970-01-01').toDate()

export const isDefaultStartDate = date => 
  moment(date).isSame(moment(DEFAULT_START_DATE))

/*
  For a date reset hours, minutes, seconds
  Eg. 
    date: Wednesday May 01, 2019 08:50:10 (am)
    becomes: Wednesday May 01, 2019 00:00:00 (am)
    final result: 1556661600
*/
export const toUnix = date => 
  resetTime(moment(date)).unix()

const tofirebaseTimestampFromUnix = timestamp => 
  new firebase.firestore.Timestamp(timestamp, 0)

export const toFirebaseTimestamp = date => {
  const timestamp = toUnix(date)
  return tofirebaseTimestampFromUnix(timestamp)
}

export const toDate = firebaseTimestamp => {
  const myDate = new Date()
  myDate.setTime(firebaseTimestamp.seconds * 1000)
  return myDate
}

export const toISOFormat = date => 
  moment(date).format('YYYY-MM-DD')

export const toDateFormat = date => 
  moment(date).format('DD/MM/YYYY')

export const toTimeFormat = date => 
  moment(date).format('HH:mm')

export const getThisWeekDate = now => getThisPeriodDate(now, PERIOD.WEEK)
export const getThisMonthDate = now => getThisPeriodDate(now, PERIOD.MONTH)
export const getThisTrimesterDate = now => getThisPeriodDate(now, PERIOD.TRIMESTER)

/*
 return 1, 2, 3, 4, 5 (may of 2019 contains 5 weeks...)
*/
export const getWeekOfMonth = date => {
  const mDate = moment(date)
  const firstDayOfMonth = mDate.clone().startOf('month')
  const firstDayOfWeek = firstDayOfMonth.clone().startOf('isoweek')

  const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days')
  return Math.ceil((mDate.date() + offset) / 7)
}

export const getMonthOfTrimester = date => 
  moment(date).month() + 1

const getThisPeriodDate = (now, period = PERIOD.WEEK) => {
  if (now == null) {
    return
  }

  const mNow = resetTime(moment(now))
  let day1st = undefined

  if (PERIOD.WEEK === period) {
    const dateOfMth = mNow.date() // 1 to 31
    const is1stWk = getWeekOfMonth(now) === 1

    const firstDayOfMonth = mNow.clone().startOf('month')

    // 1st day can be a different day than monday (for every 1st week of month)
    if (is1stWk && dateOfMth <= 7) {
      day1st = firstDayOfMonth
    } else {
      day1st = mNow.clone().isoWeekday(1) // monday
    }


  } else if (PERIOD.MONTH === period) {
    day1st = mNow.clone().date(1)
  } else {
    day1st = mNow.clone().subtract(2, 'month').date(1)
  }
  
  return {
    begin: day1st.toDate(),
    end: nextDay(mNow.toDate())
  }
}

const resetTime = momentObj => 
  momentObj.hour(0).minute(0).second(0)

export const dateDiff = (begin, end) => 
  moment(end).diff(moment(begin), 'd')

export const nextDay = date =>
  moment(date).add(1, 'd').toDate()

export const pastDays = (howMany, thisDay) => {
  const result = []
  const mToday = moment(thisDay)
  let mDay = mToday.clone().subtract(howMany, 'd')
  
  while (mDay.isBefore(mToday)) {
    result.push(mDay.clone().toDate())
    mDay = mDay.add(1, 'd')
  }
  return result
}

export const canHappen = (date, now) => 
  moment(date).isSameOrAfter(resetTime(moment(now)))

export const offsetDays = (date, nbDays) => 
  moment(date).add(nbDays, 'd').toDate()

export const lastYear = now => 
  moment(now).subtract(1, 'y').toDate()