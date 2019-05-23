import { 
  loadDataWeight, 
} from '../utils/firebaseFakeData'

class SharedAPI {
  loadData = async uid => {
    await loadDataWeight(uid)
  }
}

export default new SharedAPI()