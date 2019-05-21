import { 
  addWeight
} from '../weight/weightFirebase'
import { generateFirebaseTimestamp } from '../utils/date-utils'
import { PERIOD } from '../stat/StatHelper'

let WEIGHT_API = {}

WEIGHT_API.fetchWeightList = (period = PERIOD.WEEK) => {
  // TODO dynamize
  // week
  const dataWeek = {
    labels: ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'],
    series: [
      [5, 9, 2, 2, 4, 3, 5, 4],
      [3, 4, 7, 8, 2, 1.44, 5, 1]
    ]
  }

  // month
  const dayInMonth = []
  for (let i = 1; i <=32; i++)
    dayInMonth.push(i)

  const dataMonth = {
    labels: dayInMonth.map(x => x.toString(10)),
    series: [
      [5, 9, 2, 2, 4, 3, 5, 4, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 26, 27, 18, 19, 30, 31, 31],
      [3, 4, 7, 8, 2, 1.44, 5, null, null, null, null, null, null, null, null, 1, 4, 4, 5, 6, 6, 6, 2, 3, 4, 6, 8, 8, 8, 43, 32, 32]
    ]
  }

  // trimester
  const dataTrimester = {
    labels: ['janv', 'fev', 'mars', 'mai'],
    series: [
      [44.5, 33.2, 34, 34],
      [20, 29, 29, 39]
    ]
  }

  // semester
  const dataSemester = {
    labels: ['janv', 'fev', 'mars', 'avril', 'mai', 'juin', 'juillet'],
    series: [
      [44.5, 33.2, 34, 20, 19, 18, 18],
      [20, 29, 29, 23, 22, 15, 15]
    ]
  }

  switch (period) {
    case PERIOD.WEEK: 
      return dataWeek
    case PERIOD.MONTH:
      return dataMonth
    case PERIOD.TRIMESTER:
      return dataTrimester
    default: 
      return dataSemester
  }
}

WEIGHT_API.addWeight = async (nbPers, nbDays, totalWeight, date, type) => {
  const weightObj = convertToWeight(nbPers, nbDays, totalWeight, date, type)
  console.log(addWeight(weightObj))
}

const convertToWeight = (nbPers, nbDays, totalWeight, date, type) => {
  console.log('convertToWeight');
  const timestamp = generateFirebaseTimestamp(date.getTime())
  console.log(timestamp)
  

  return {
    nbPers, 
    nbDays, 
    totalWeight, 
    type,
    recordedDate: timestamp,
  }
}

export default WEIGHT_API