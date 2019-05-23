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

    let norecycledList, recycledList, avgList

    if (weightList) {
      norecycledList = weightList.map( ({ data }) => data.norecycled)
      recycledList = weightList.map( ({ data }) => data.recycled)
      avgList = weightList.map( ({ data }) => this.avg(data.recycled, data.norecycled))
    }

    return {
      categories: DAYS_SHORT,
      recycled: recycledList,
      norecycled: norecycledList,
      avg: avgList,
    }
  }

  avg = (recycled, norecycled) => {
    let result = 0
    result += recycled ? Number.parseInt(recycled) : 0
    result += norecycled ? Number.parseInt(norecycled) : 0
    return result / 2
  }
}

export default new StatAPI()