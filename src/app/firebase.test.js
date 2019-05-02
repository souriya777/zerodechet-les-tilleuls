import { Firebase }  from '../app/firebase'

test('convert 2019-05-01 to {"nanoseconds": 0, "seconds": 1556661600} => firebase timestamp', () => {
  const timestamp = Firebase.toFirebaseTimestamp('2019-05-01')
  expect(timestamp).toEqual({"nanoseconds": 0, "seconds": 1556661600})
})