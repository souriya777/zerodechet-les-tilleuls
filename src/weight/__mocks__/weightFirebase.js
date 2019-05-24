import { firebaseTimestamp } from '../../utils/date-utils'

import { 
  UID, 
  WEEK, 
  MONTH, 
  TRIMESTER 
} from '../../utils/common-test/common-data'
import { WEEK_DATA } from './weekData'
import { MONTH_DATA } from './monthData'
import { TRIMESTER_DATA } from './trimesterData'

class WeightFirebase {
  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp) => {
    if ( UID !== uid) {
      return
    }
    
    if (
      firebaseTimestamp(WEEK.MONDAY.toDate()).isEqual(beginTimestamp)
      && firebaseTimestamp(WEEK.SATURDAY.toDate()).isEqual(endTimestamp)
    ) {
      return WEEK_DATA
    } else if (
      firebaseTimestamp(MONTH.DAY_1.toDate()).isEqual(beginTimestamp)
      && firebaseTimestamp(MONTH.DAY_23.toDate()).isEqual(endTimestamp)
    ) {
      return MONTH_DATA
    } else if (
      firebaseTimestamp(TRIMESTER.MAR_DAY_1).isEqual(beginTimestamp)
      && firebaseTimestamp(TRIMESTER.MAY_DAY_23).isEqual(endTimestamp)
    ) {
      return TRIMESTER_DATA
    }
  }
}

export default new WeightFirebase()