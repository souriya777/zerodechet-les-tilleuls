import { 
  VALID_UID,
  VALID_BEGIN_TIMESTAMP,
  VALID_END_TIMESTAMP,
} from './weightData'
import { WEEK_DATA } from './weekData'

class WeightFirebase {
  getWeightListBtwDates = async (uid, beginTimestamp, endTimestamp) => {
    if (
      VALID_UID === uid
      && VALID_BEGIN_TIMESTAMP.isEqual(beginTimestamp)
      && VALID_END_TIMESTAMP.isEqual(endTimestamp)
    ) {
      return WEEK_DATA
    }

    return []
  }
}

export default new WeightFirebase()