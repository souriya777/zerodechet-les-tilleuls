import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'
import progressReducer from '../progress/progressReducer'
import errorReducer from '../utils/ErrorReducer'

export default combineReducers({
  user: userReducer,
  progress: progressReducer,
  error: errorReducer,
  loadingBar: loadingBarReducer,
})