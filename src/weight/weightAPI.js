import WeightFirebase from './weightFirebase'
import { firebaseTimestamp, pastDays, dateDiff, toDate } from '../utils/date-utils'
import { avgHome } from '../stat/StatHelper'
import PermissionDeniedException from '../utils/PermissionDeniedException'
import { GENERAL_ERROR_CODES } from '../utils/ErrorCodes'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = firebaseTimestamp(beginDate)
    const endTimestamp = firebaseTimestamp(endDate)
    
    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (nbPers, startDate, endDate, recycled, norecycled) => {
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
      await WeightFirebase.addWeightBatch(insertList)
    } catch(error) {
      const errorMsg = GENERAL_ERROR_CODES[error.code]
      throw new PermissionDeniedException(errorMsg)
    }

  }

  removeAllWeight = async () => {
    WeightFirebase.removeAllWeight()
  }

  getLastWeight = async uid => {
    try {
      const w = await WeightFirebase.getLastWeight(uid)
      return convertFromWeight(w)
    } catch(error) {
      const errorMsg = GENERAL_ERROR_CODES[error.code]
      throw new PermissionDeniedException(errorMsg)
    }
  }

  getLastStartDate = async uid => {
    const w = await this.getLastWeight(uid)
    if (w != null) {
      return w.startDate
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

const convertFromWeight = w => {
  const startDate = toDate(w.startDate)
  const endDate = toDate(w.endDate)
  const recordedDate = toDate(w.recordedDate)

  return {
    nbPers: w.nbPers,
    recycled: w.recycled,
    norecycled: w.norecycled,
    startDate,
    endDate,
    recordedDate,
  }
}

export default new WeightAPI()