import weightAPI from '../weight/weightAPI'
import { DAYS_SHORT } from './StatHelper'
import { getThisWeekDate } from '../utils/date-utils'

class StatAPI {

  getWeekData = async (uid, now) => {
    const { begin, end } = getThisWeekDate(now)

    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)

    if (! weightList) {
      return
    }

    let norecycledList
    let recycledList

    if (weightList) {
      norecycledList = weightList.map( ({ data }) => data.norecycled)
      recycledList = weightList.map( ({ data }) => data.recycled)
    }

    return {
      categories: DAYS_SHORT,
      recycled: recycledList,
      norecycled: norecycledList,
    }
  }
}

export default new StatAPI()