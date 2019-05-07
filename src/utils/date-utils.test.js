import { DATE_FORMAT, toTimestamp } from './date-utils'

test('convert 2019-05-01 to 1556661600 (with pattern)', () => {
  const timestamp = toTimestamp('2019-05-01', DATE_FORMAT)
  expect(timestamp).toBe(1556661600)
})

test('convert 2019-05-01 to 1556661600 (without pattern)', () => {
  const timestamp = toTimestamp('2019-05-01')
  expect(timestamp).toBe(1556661600)
})