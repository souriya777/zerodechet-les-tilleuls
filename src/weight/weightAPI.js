import WeightFirebase from './weightFirebase'
import { firebaseTimestamp, pastDays, dateDiff, toDate, oneDayLater } from '../utils/date-utils'
import { avgHome } from '../stat/StatHelper'
import PermissionDeniedException from '../utils/PermissionDeniedException'
import { GENERAL_ERROR_CODES } from '../utils/ErrorCodes'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = firebaseTimestamp(beginDate)
    const endTimestamp = firebaseTimestamp(endDate)
    
    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (uid, nbPers, startDate, endDate, recycled, norecycled) => {
    // calculate average weight
    const diff = dateDiff(startDate, endDate)
    const avgNb = avgHome(recycled, norecycled, nbPers, diff)
    
    // get days list (we also include endDate)
    const dayList = pastDays(diff, endDate)
    dayList.push(endDate)
    
    // generate dynamic weight to insert
    const insertList = dayList.map(d => {
      return convertToWeight(nbPers, d, d, avgNb.recycled, avgNb.norecycled)
    })

    if (insertList == null || insertList.length === 0) {
      return
    }

    // call db
    try {
      await WeightFirebase.addWeightBatch(uid, insertList)
    } catch(error) {
      const errorMsg = GENERAL_ERROR_CODES[error.code]
      throw new PermissionDeniedException(errorMsg)
    }

  }

  handleGetLastStartDate = async () => {
    // call db
    try {
      const w = await WeightFirebase.getLastWeight()
      if (w != null) {
        const startDate = oneDayLater(toDate(w.startDate))
        return startDate
      }
    } catch(error) {
      const errorMsg = GENERAL_ERROR_CODES[error.code]
      throw new PermissionDeniedException(errorMsg)
    }

    return
  }
}


const convertToWeight = (nbPers, startDate, endDate, recycled, norecycled) => {
  const startTimestamp = firebaseTimestamp(startDate)
  const endTimestamp = firebaseTimestamp(endDate)
  const nowTimestamp = firebaseTimestamp(new Date())
  return {
    nbPers: nbPers,
    recycled: recycled,
    norecycled: norecycled,
    startDate: startTimestamp,
    endDate: endTimestamp,
    recordedDate: nowTimestamp,
  }
}

export default new WeightAPI()