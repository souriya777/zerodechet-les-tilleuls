import { 
  loadDataUser, 
  loadDataWeight, 
  loadDataEvent,
  getWeightList,
  getWeightListBtwDates,
} from '../utils/firebaseFakeData'

let SHARED_API = {}

SHARED_API.loadData = async uid => {
  await loadDataWeight(uid)
  // await loadDataUser(uid)
  // await loadDataEvent(uid)
  // getWeightList(uid)
  // await getWeightListBtwDates(uid)
}

export default SHARED_API