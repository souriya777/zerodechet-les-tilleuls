import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'
import eventReducer from '../event/eventReducer'
import progressReducer from '../progress/progressReducer'
import errorReducer from '../utils/ErrorReducer'

export default combineReducers({
  user: userReducer,
  event: eventReducer,
  progress: progressReducer,
  error: errorReducer,
  loadingBar: loadingBarReducer,
})