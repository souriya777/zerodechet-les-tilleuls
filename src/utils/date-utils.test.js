import { 
  DATE_FORMAT, 
  toTimestamp, 
  generateFirebaseTimestamp,
  generateFirebaseTimestampFromString 
} from './date-utils'

const moment = require('moment')

// @deprecated
test('convert 2019-05-01 to 1556661600 (with pattern)', () => {
  const timestamp = toTimestamp('2019-05-01', DATE_FORMAT)
  expect(timestamp).toBe(1556661600)
})

// @deprecated
test('convert 2019-05-01 to 1556661600 (without pattern)', () => {
  const timestamp = toTimestamp('2019-05-01')
  expect(timestamp).toBe(1556661600)
})

test('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} From Date 2019-05-01', () => {
  const date = moment('2019-05-01').toDate()
  const firebaseTimestamp = generateFirebaseTimestamp(date)
  expect(firebaseTimestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
})

test('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} From String "2019-05-01"', () => {
  const firebaseTimestamp = generateFirebaseTimestampFromString('2019-05-01')
  expect(firebaseTimestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
})