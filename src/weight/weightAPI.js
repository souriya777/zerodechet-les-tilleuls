import WeightFirebase from './weightFirebase'
import { generateFirebaseTimestamp } from '../utils/date-utils'

class WeightAPI {
  getWeightListBtwDates = (uid, beginDate, endDate) => {
    const beginTimestamp = generateFirebaseTimestamp(beginDate)
    const endTimestamp = generateFirebaseTimestamp(endDate)

    return WeightFirebase.getWeightListBtwDates(uid, beginTimestamp, endTimestamp)
  }
  
  addWeight = async (nbPers, nbDays, totalWeight, date, type) => {
    const weightObj = convertToWeight(nbPers, nbDays, totalWeight, date, type)
    console.log(WeightFirebase.addWeight(weightObj))
  }
}


const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  console.log('convertToWeight');
  const timestamp = generateFirebaseTimestamp(date)
  console.log(timestamp)

  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    type,
    recordedDate: timestamp,
  }
}

export default new WeightAPI()