import { 
  loadDataWeight, 
} from '../utils/firebaseFakeData'

class SharedAPI {
  loadData = async () => {
    await loadDataWeight()
  }
}

export default new SharedAPI()