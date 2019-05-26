import WeightFirebase from './weightFirebase'
import { firebaseTimestamp, pastDays, dateDiff } from '../utils/date-utils'
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
    
    // get days list
    const dayList = pastDays(diff, endDate)
    
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