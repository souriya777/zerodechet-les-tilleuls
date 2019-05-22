import { 
  UID,
  WEEK 
} from '../../utils/common-test/common-data'
import { WEEK_DATA } from './weekData'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    if (
      UID === uid &&
      WEEK.MONDAY.toDate().getTime() === beginDate.getTime() &&
      WEEK.SUNDAY.toDate().getTime() === endDate.getTime()
    ) {
      return WEEK_DATA
    }

    return
  }
  
}

export default new WeightAPI()