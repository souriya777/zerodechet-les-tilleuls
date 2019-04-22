import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'
import errorReducer from '../utils/ErrorReducer'

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  loadingBar: loadingBarReducer,
})