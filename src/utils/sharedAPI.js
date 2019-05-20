import { 
  loadDataUser, 
  loadDataWeight, 
  loadDataEvent 
} from '../utils/firebaseFakeData'

let SHARED_API = {}

SHARED_API.loadData = async uid => {
  await loadDataWeight()
  await loadDataUser(uid)
  await loadDataEvent()
}

export default SHARED_API