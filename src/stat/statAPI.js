import weightAPI from '../weight/weightAPI'
import { 
  DAYS_SHORT,
  MONTH_SHORT,
  TRIMESTER_SHORT,
} from './StatHelper'
import { 
  toDate,
  getThisWeekDate,
  getThisMonthDate,
  getThisTrimesterDate,
  getWeekOfMonth,
  getMonthOfTrimester,
} from '../utils/date-utils'
import { avg } from './StatHelper'

class StatAPI {

  getWeekData = async (uid, now) => {
    const { begin, end } = getThisWeekDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)
    
    return statForWeek(weightList)
  }

  getMonthData = async (uid, now) => {
    const { begin, end } = getThisMonthDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)

    return statForMonth(weightList)
  }

  getTrimesterData = async (uid, now) => {
    const { begin, end } = getThisTrimesterDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)

    return statForTrimester(weightList)
  }

}

const reduceStat = list => list.reduce((acc, val) => acc + val) / list.length

const statForWeek = weightList => {
  if (weightList == null || weightList.length === 0) {
    return
  }

  const norecycledList = weightList.map( ({ data }) => 
  data.norecycled)

  const recycledList = weightList.map( ({ data }) => data.recycled)
  
  const avgList = weightList.map( ({ data }) => avg(data.recycled, data.norecycled))

  return {
    categories: DAYS_SHORT.slice(0, avgList.length),
    recycled: recycledList,
    norecycled: norecycledList,
    avg: avgList,
  }
}

const statForMonth = weightList => {
  if (weightList == null || weightList.length === 0) {
    return
  }

  // prepare week list
  const weightMth = []
  let weightWk = []
  let wk = 1
  let wkOfMth = null

  weightList.forEach( weight => {
    const { data } = weight
    wkOfMth = getWeekOfMonth(toDate(data.startDate))
    
    if (wkOfMth > wk) {
      // console.log(`${MONTH_SHORT} ${wk}`, weightWk.length)
      weightMth.push(weightWk)
      
      // reset
      wk = wkOfMth
      weightWk = []
    }
    
    weightWk.push(weight)
  })
  // console.log(`${MONTH_SHORT} ${wk}`, weightWk.length)
  weightMth.push(weightWk)

  // console.log(weightMth)

  // compute
  const categories = []
  const recycledList = []
  const norecycledList = []

  weightMth.forEach((weightWk, i) => {
    const cat = `${MONTH_SHORT} ${i+1}`
    // console.log(`${cat} -----`)

    const { recycled, norecycled } = statForWeek(weightWk)
    const reduceRecycled = reduceStat(recycled)
    const reduceNorecycled = reduceStat(norecycled)

    // console.log(recycled, norecycled)
    // console.log(reduceRecycled, reduceNorecycled)

    categories.push(cat)
    recycledList.push(reduceRecycled)
    norecycledList.push(reduceNorecycled)
  })

  // average
  const avgList = categories.map((o, i) => 
    avg(recycledList[i], norecycledList[i])
  )

  return {
    categories: categories,
    recycled: recycledList,
    norecycled: norecycledList,
    avg: avgList,
  }
}

const statForTrimester = weightList => {
  if (weightList == null || weightList.length === 0) {
    return
  }

  // prepare month list
  const weightTrimester = []
  let weightMth = []
  let mth = null
  let mthOfTrimester = null

  weightList.forEach( weight => {
    const { data } = weight
    mthOfTrimester = getMonthOfTrimester(toDate(data.startDate))

    if (mth == null) {
      mth = mthOfTrimester
    }
    
    if (mthOfTrimester > mth) {
      // console.log(`${TRIMESTER_SHORT[mth-1]}`, weightMth.length)
      weightTrimester.push(weightMth)
      
      // reset
      mth = mthOfTrimester
      weightMth = []
    }
    
    weightMth.push(weight)
  })
  // console.log(`${TRIMESTER_SHORT[mth-1]}`, weightMth.length)
  weightTrimester.push(weightMth)

  // compute
  const categories = []
  const recycledList = []
  const norecycledList = []
  mth -= 3 // because month was incremented just above

  weightTrimester.forEach((weightMth, i) => {
    const cat = `${TRIMESTER_SHORT[mth + i]}`
    // console.log(`${cat} -----`)

    const { recycled, norecycled } = statForMonth(weightMth)
    const reduceRecycled = reduceStat(recycled)
    const reduceNorecycled = reduceStat(norecycled)

    // console.log(recycled, norecycled, avg)
    // console.log(reduceRecycled, reduceNorecycled)

    categories.push(cat)
    recycledList.push(reduceRecycled)
    norecycledList.push(reduceNorecycled)
  })

  // average
  const avgList = categories.map((o, i) => 
    avg(recycledList[i], norecycledList[i])
  )

  return {
    categories: categories,
    recycled: recycledList,
    norecycled: norecycledList,
    avg: avgList,
  }
}

export default new StatAPI()