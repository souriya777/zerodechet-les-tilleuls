import WeightFirebase from './weightFirebase'
import { firebaseTimestamp } from '../utils/date-utils'
import PermissionDeniedException from '../utils/PermissionDeniedException'
import { GENERAL_ERROR_CODES } from '../utils/ErrorCodes'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = firebaseTimestamp(beginDate)
    const endTimestamp = firebaseTimestamp(endDate)

    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (uid, nbPers, startDate, endDate, recycled, norecycled) => {
    let newRef = null

    try {
      const w = convertToWeight(nbPers, startDate, endDate, recycled, norecycled)
      newRef = await WeightFirebase.addWeight(uid, w)
    } catch(error) {
      const errorMsg = GENERAL_ERROR_CODES[error.code]
      throw new PermissionDeniedException(errorMsg)
    }

    return newRef
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