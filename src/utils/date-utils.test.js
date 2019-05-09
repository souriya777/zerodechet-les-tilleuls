import { DATE_FORMAT, toTimestamp, generateFirebaseTimestamp } from './date-utils'

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

test('generate Firebase Timestamp {"nanoseconds": 0, "seconds": 1556661600} Form Timestamp 1556661600', () => {
  const firebaseTimestamp = generateFirebaseTimestamp(1556661600)
  expect(firebaseTimestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
})