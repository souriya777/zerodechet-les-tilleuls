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
} from '../utils/date-utils'
import { avg } from './StatHelper'

const moment = require('moment')

class StatAPI {

  getWeekData = async (uid, now) => {
    const { begin, end } = getThisWeekDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)
    
    // FIXME sort
    // FIXME value 0
    return statForWeek(weightList)
  }

  // FIXME 1-05 => 23 (5-7-7-4)
  getMonthData = async (uid, now) => {
    const { begin, end } = getThisMonthDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)

    // call X times statForWeek
    const weightMth = []
    let weightWk = []
    let wk = 1
    let wkOfMth = null

    // prepare week list
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
      console.log('semaine -----')
      const cat = `${MONTH_SHORT} ${i+1}`

      const { recycled, norecycled, avg } = statForWeek(weightWk)
      const reduceRecycled = reduceStat(recycled)
      const reduceNorecycled = reduceStat(norecycled)


      console.log(recycled, norecycled, avg)
      console.log(reduceRecycled, reduceNorecycled)

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

  getOldMonthData = async (uid, now) => {
    const { begin, end } = getThisMonthDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)
  
    if (weightList == null) {
      return
    }
    
    const {categories, recycledList, norecycledList} = getMonthList(weightList)

    const avgList = []
    categories.forEach((o, i) => {
      avgList.push(avg(recycledList[i], norecycledList[i]))
    })

    return {
      categories: categories,
      recycled: recycledList,
      norecycled: norecycledList,
      avg: avgList,
    }
  }

  getTrimesterData = async (uid, now) => {
    const { begin, end } = getThisTrimesterDate(now)
    
    const weightList = await weightAPI.getWeightListBtwDates(uid, begin, end)
  
    if (weightList == null) {
      return
    }

    const categories = []
    const recycledList = []
    const norecycledList = []

    let monthWeightList = []

    let currMth = null

    weightList.forEach( weight => {
      const { data } = weight
      const mthNb = moment(toDate(data.startDate)).month()
      
      if (currMth == null) {
        currMth = mthNb
      }
      
      if (mthNb > currMth) {
        const mthLbl = TRIMESTER_SHORT[currMth]
        const mthList = getMonthList(monthWeightList)
        const reduceRecycled = reduceStat(mthList.recycledList)
        const reduceNoRecycled = reduceStat(mthList.norecycledList)
        
        categories.push(mthLbl)
        recycledList.push(reduceRecycled)
        norecycledList.push(reduceNoRecycled)
        
        currMth = mthNb
        monthWeightList = []
      }
      
      monthWeightList.push(weight)
    })
    // last month
    const mthLbl = TRIMESTER_SHORT[currMth]
    const mthList = getMonthList(monthWeightList)

    const reduceRecycled = reduceStat(mthList.recycledList)
    const reduceNoRecycled = reduceStat(mthList.norecycledList)
    
    categories.push(mthLbl)
    recycledList.push(reduceRecycled)
    norecycledList.push(reduceNoRecycled)

    const avgList = []
    categories.forEach((o, i) => {
      avgList.push(avg(recycledList[i], norecycledList[i]))
    })

    return {
      categories: categories,
      recycled: recycledList,
      norecycled: norecycledList,
      avg: avgList,
    }
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


const getMonthList = weightList => {
  const categories = []
  const recycledList = []
  const norecycledList = []
  let recycled = 0
  let norecycled = 0
  let days = 1
  let wk = 1

  weightList.forEach( ({ data }) => {
    const wkOfMth = getWeekOfMonth(toDate(data.startDate))
    recycled += data.recycled
    norecycled += data.norecycled
    days++
    
    if (wkOfMth > wk) {
      categories.push(`${MONTH_SHORT} ${wk}`)
      recycledList.push(recycled / days)
      norecycledList.push(norecycled / days)

      recycled = 0
      norecycled = 0
      days = 1
      wk = wkOfMth
    }
  })
  // last week
  categories.push(`${MONTH_SHORT} ${wk}`)
  recycledList.push(recycled)
  norecycledList.push(norecycled)

  return {
    categories,
    recycledList,
    norecycledList
  }
}

export default new StatAPI()