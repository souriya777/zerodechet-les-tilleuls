import WeightFirebase from './weightFirebase'
import { firebaseTimestamp } from '../utils/date-utils'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = firebaseTimestamp(beginDate)
    const endTimestamp = firebaseTimestamp(endDate)

    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (nbPers, nbDays, totalWeight, date, type) => {
    const weightObj = convertToWeight(nbPers, nbDays, totalWeight, date, type)
    console.log(WeightFirebase.addWeight(weightObj))
  }
}


const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  const timestamp = firebaseTimestamp(date)
  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    type,
    recordedDate: timestamp,
  }
}

export default new WeightAPI()