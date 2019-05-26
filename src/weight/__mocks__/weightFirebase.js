import { firebaseTimestamp } from '../../utils/date-utils'

import { 
  UID, 
  WEEK, 
  MONTH, 
  TRIMESTER ,
  DOC_WEIGHT_REF,
  FirebaseError,
} from '../../utils/common-test/common-data'
import { WEEK_DATA } from './weekData'
import { MONTH_DATA } from './monthData'
import { TRIMESTER_DATA } from './trimesterData'
import { WEIGHT_DB } from './weightDb'

class WeightFirebase {
  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp) => {
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

  addWeight = async (uid, data) => {
    if ( UID !== uid) {
      throw new FirebaseError('permission-denied')
    }

    if (
      UID === uid && 
      WEIGHT_DB.nbPers === data.nbPers &&
      WEIGHT_DB.recycled === data.recycled &&
      WEIGHT_DB.norecycled === data.norecycled &&
      WEIGHT_DB.startDate.seconds === data.startDate.seconds &&
      WEIGHT_DB.endDate.seconds === data.endDate.seconds &&
      WEIGHT_DB.recordedDate.seconds === data.recordedDate.seconds
    ) {
      return DOC_WEIGHT_REF
    }

    return null
  }
}

export default new WeightFirebase()