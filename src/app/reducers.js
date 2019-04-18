import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'

export default combineReducers({
  user: userReducer,
  loadingBar: loadingBarReducer,
})