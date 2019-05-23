import { firebaseTimestampFromString } from '../../utils/date-utils'

const moment = require('moment')

export const VALID_UID = 'PINv9HysdhWBgbq870qGSmjXH0q2'

export const VALID_BEGIN_DATE = moment('2019-05-02').toDate()
export const VALID_END_DATE = moment('2019-05-09').toDate()

export const VALID_BEGIN_TIMESTAMP = firebaseTimestampFromString('2019-05-02')
export const VALID_END_TIMESTAMP = firebaseTimestampFromString('2019-05-09')