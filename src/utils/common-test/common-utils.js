import { toDate } from '../date-utils'
import { RECORDED_DATE_DB } from './common-data'
const moment = require('moment')


export const stripFirebaseTimestamp = list => {
  return list.map(o => {
    const startDate = toString(o.startDate)
    const endDate = toString(o.endDate)
    const recordedDate = RECORDED_DATE_DB

    return Object.assign({}, o, {
      startDate,
      endDate,
      recordedDate
    })
  })
}

const toString = timestamp => 
  moment(toDate(timestamp)).format('YYYY-MM-DD')