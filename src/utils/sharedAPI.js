import { 
  loadDataUser, 
  loadDataWeight, 
  loadDataEvent,
  getWeightList,
} from '../utils/firebaseFakeData'

class SharedAPI {
  loadData = async uid => {
    await loadDataWeight(uid)
    // await loadDataUser(uid)
    // await loadDataEvent(uid)
    // getWeightList(uid)
  }
}


export default new SharedAPI()