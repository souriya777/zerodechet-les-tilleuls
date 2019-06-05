const moment = require('moment')

export const UID = 'PINv9HysdhWBgbq870qGSmjXH0q2'
export const EMAIL = 'souriya59@gmail.com'
export const FIRSTNAME = 'Souriya'
export const LASTNAME = 'Phongsavanh'
export const PWD = 'M0ttt2P@ssseE2deuxO0uf'

export const MEMBERS_TOTAL = 2
export const WEIGHT_RECYCLED = 2000
export const WEIGHT_NORECYCLED = 1000
export const RECORDED_DATE_DB = '2019-05-08'

export const WEEK = {
  MONDAY: moment('2019-05-06'),
  TUESDAY: moment('2019-05-07'),
  SATURDAY: moment('2019-05-11'),
  SUNDAY: moment('2019-05-12'),
}
export const MONTH = {
  DAY_1: moment('2019-05-01'),
  DAY_5: moment('2019-05-05'),
  DAY_6: moment('2019-05-06'),
  DAY_7: moment('2019-05-07'),
  DAY_8: moment('2019-05-08'),
  DAY_14: moment('2019-05-14'),
  DAY_15: moment('2019-05-15'),
  DAY_23: moment('2019-05-23'),
  DAY_31: moment('2019-05-31'),
}
export const TRIMESTER = {
  JAN_DAY_1: moment('2019-01-01'),
  JAN_DAY_2: moment('2019-01-02'),
  JAN_DAY_30: moment('2019-01-30'),
  JAN_DAY_31: moment('2019-01-31'),
  FEV_DAY_1: moment('2019-02-01'),
  FEV_DAY_12: moment('2019-02-12'),
  FEV_DAY_13: moment('2019-02-13'),
  FEV_DAY_14: moment('2019-02-14'),
  MAR_DAY_1: moment('2019-03-01'),
  MAR_DAY_28: moment('2019-03-28'),
  APR_DAY_8: moment('2019-04-08'),
  MAY_DAY_23: moment('2019-05-23'),
  LAST_DEC_1: moment('2018-12-01'),
  LAST_JAN_DAY_1: moment('2018-01-01'),
}
export const ANNUAL = {
  JUN_DAY_4: moment('2019-06-04'),
  JUN_DAY_5: moment('2019-06-05'),
  JUN_DAY_6: moment('2019-06-06'),
}
export const DAY_WITH_HOUR = {
  JUN_DAY_3_00H00: moment('2019-06-03T00:00'),
  JUN_DAY_5_00H44: moment('2019-06-05T00:44'),
  JUN_DAY_6_00H00: moment('2019-06-06T00:00'),
}

export const DAY_NEXT_YEAR = moment('2020-05-08')
export const DAY_LAST_YEAR = moment('2018-05-08')

export class FirebaseError extends Error {
  constructor(code) {
    super('mock firebase error')
    this.code = code
  }
}