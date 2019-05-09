import { 
  loadDataUser, 
  loadDataWeight, 
  loadDataEvent 
} from '../utils/firebaseFakeData'

let SHARED_API = {}

SHARED_API.loadData = async () => {
  await loadDataWeight()
  await loadDataUser()
  await loadDataEvent()
}

export default SHARED_API