import { 
  UID, 
  WEEK, 
  MONTH, 
  TRIMESTER ,
  FirebaseError,
} from '../../utils/common-test/common-data'
import { stripFirebaseTimestamp } from '../../utils/common-test/common-utils'
import { firebaseTimestamp } from '../../utils/date-utils'
import { WEEK_DATA } from './weekData'
import { MONTH_DATA } from './monthData'
import { TRIMESTER_DATA } from './trimesterData'
import { INSERT_WEIGHT_LIST } from './insertWeightList'

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

  addWeightBatch = async (uid, dataList) => {
    if (UID !== uid) {
      throw new FirebaseError('permission-denied')
    }
    
    const cleanDataList = stripFirebaseTimestamp(dataList)
    
    if (
      INSERT_WEIGHT_LIST.length === cleanDataList.length &&
      compareWeight(INSERT_WEIGHT_LIST[0], cleanDataList[0]) &&
      compareWeight(INSERT_WEIGHT_LIST[1], cleanDataList[1])
    ) {
      return
    } 

    throw new FirebaseError()
  }
}

const compareWeight = (w1, w2) => {
    if (
      w1.nbPers === w2.nbPers &&
      w1.recycled === w2.recycled &&
      w1.norecycled === w2.norecycled &&
      w1.startDate === w2.startDate &&
      w1.endDate === w2.endDate &&
      w1.recordedDate === w2.recordedDate
    ) {
      return true
    }
    return false
  }

export default new WeightFirebase()