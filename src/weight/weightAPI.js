import WeightFirebase from './weightFirebase'
import { firebaseTimestamp } from '../utils/date-utils'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = firebaseTimestamp(beginDate)
    const endTimestamp = firebaseTimestamp(endDate)

    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (uid, nbPers, startDate, endDate, recycled, norecycled) => {
    const w = convertToWeight(nbPers, startDate, endDate, recycled, norecycled)
    WeightFirebase.addWeight(uid, w)
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