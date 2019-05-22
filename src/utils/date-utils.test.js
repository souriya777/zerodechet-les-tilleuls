import { 
  generateFirebaseTimestamp,
  generateFirebaseTimestampFromString,
  getThisWeekDate,
} from './date-utils'
import { WEEK } from './common-test/common-data'

const moment = require('moment')

describe(`generateFirebaseTimestamp`, () => {
  
  it('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} From Date 2019-05-01', () => {
    const date = moment('2019-05-01').toDate()
    const firebaseTimestamp = generateFirebaseTimestamp(date)
    expect(firebaseTimestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
  })
  
  it('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} From String "2019-05-01"', () => {
    const firebaseTimestamp = generateFirebaseTimestampFromString('2019-05-01')
    expect(firebaseTimestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
  })

})

describe(`getThisWeekDate`, () => {
  
  it(`for now = SATURDAY, returns 
    {
      begin: MONDAY
      end: SATURDAY
    }`, () => 
  {
    const mNow = WEEK.SATURDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.SATURDAY.toDate(),
    })
  })
  
  it(`for now = SUNDAY, returns 
    {
      begin: MONDAY
      end: SUNDAY
    }`, () => 
  {
    const mNow = WEEK.SUNDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.SUNDAY.toDate(),
    })
  })

  it(`for now = MONDAY, returns 
    {
      begin: MONDAY
      end: MONDAY
    }`, () => 
  {
    const mNow = WEEK.MONDAY
    const dates = getThisWeekDate(mNow.toDate())

    expect(dates).toEqual({
      begin: WEEK.MONDAY.toDate(),
      end: WEEK.MONDAY.toDate(),
    })
  })

  it(`for now = undefined or null, returns null`, () => 
  {
    const expectedNull = getThisWeekDate(null)
    const expectedNull2 = getThisWeekDate(undefined)
    const expectedNull3 = getThisWeekDate()

    expect(expectedNull).toEqual(undefined)
    expect(expectedNull2).toEqual(undefined)
    expect(expectedNull3).toEqual(undefined)
  })

})
