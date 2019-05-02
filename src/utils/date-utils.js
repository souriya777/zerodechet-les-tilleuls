const moment = require('moment')

export const TIME_00 = 'T00:00:00'
export const DATE_FORMAT = 'YYYY-MM-DD'

export const toTimestamp = (input, regex = DATE_FORMAT) => {
  return moment(input, regex).unix()
}