import { 
  UID, 
  WEEK, 
  MONTH, 
  TRIMESTER ,
  FirebaseError,
} from '../../utils/common-test/common-data'
import { stripFirebaseTimestamp } from '../../utils/common-test/common-utils'
import { toFirebaseTimestamp } from '../../utils/date-utils'
import { WEEK_DATA } from './weekData'
import { MONTH_DATA } from './monthData'
import { TRIMESTER_DATA } from './trimesterData'
import { INSERT_WEIGHT_LIST_DATA } from './insertWeightListData'
import { LAST_WEIGHT_DATA } from './lastWeightData'

class WeightFirebase {
  getAll = async () => {
    return TRIMESTER_DATA
  }

  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp) => {
    if (UID !== uid) {
      throw new FirebaseError('permission-denied')
    }
    
    if (
      toFirebaseTimestamp(WEEK.MONDAY.toDate()).isEqual(beginTimestamp)
      && toFirebaseTimestamp(WEEK.SUNDAY.toDate()).isEqual(endTimestamp)
    ) {
      return WEEK_DATA
    } else if (
      toFirebaseTimestamp(MONTH.DAY_1.toDate()).isEqual(beginTimestamp)
      && toFirebaseTimestamp(MONTH.DAY_24.toDate()).isEqual(endTimestamp)
    ) {
      return MONTH_DATA
    } else if (
      toFirebaseTimestamp(TRIMESTER.MAR_DAY_1).isEqual(beginTimestamp)
      && toFirebaseTimestamp(TRIMESTER.MAY_DAY_24).isEqual(endTimestamp)
    ) {
      return TRIMESTER_DATA
    }
  }

  addWeightBatch = async (dataList) => {
    const cleanDataList = stripFirebaseTimestamp(dataList)
    
    if (
      INSERT_WEIGHT_LIST_DATA.length === cleanDataList.length &&
      compareWeight(INSERT_WEIGHT_LIST_DATA[0], cleanDataList[0]) &&
      compareWeight(INSERT_WEIGHT_LIST_DATA[1], cleanDataList[1])
    ) {
      return
    } 

    throw new FirebaseError()
  }

  getLastWeight = async uid => {
    if (UID !== uid) {
      throw new FirebaseError('permission-denied')
    }
    return LAST_WEIGHT_DATA
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