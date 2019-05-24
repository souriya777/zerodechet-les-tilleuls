import { 
  loadDataWeight, 
  getWeightListBtwDates
} from '../utils/firebaseFakeData'
import { 
  getThisMonthDate, 
  getThisTrimesterDate 
} from './date-utils'

class SharedAPI {
  loadData = async uid => {
    await loadDataWeight(uid)
    // const { begin, end } = getThisMonthDate(new Date())
    // console.log(begin, end)
    // getWeightListBtwDates(uid, begin, end)
  }
}

export default new SharedAPI()