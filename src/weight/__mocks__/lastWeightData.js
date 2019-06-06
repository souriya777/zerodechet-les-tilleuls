import { ANNUAL } from '../../utils/common-test/common-data'

export const LAST_WEIGHT_DATA = {
  "endDate": {
    "seconds": 1559599200,
    "nanoseconds": 0
  },
  "nbPers": 2,
  "norecycled": 150,
  "recordedDate": {
    "seconds": 1559772000,
    "nanoseconds": 0
  },
  "recycled": 100,
  "startDate": {
    "seconds": 1559599200,
    "nanoseconds": 0
  }
}

export const CONVERTED_LAST_WEIGHT_DATA = {
  "endDate": ANNUAL.JUN_DAY_4.toDate(),
  "nbPers": 2,
  "norecycled": 150,
  "recordedDate": ANNUAL.JUN_DAY_6.toDate(),
  "recycled": 100,
  "startDate": ANNUAL.JUN_DAY_4.toDate()
}