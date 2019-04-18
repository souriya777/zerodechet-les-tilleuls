import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import user from './user'

export default combineReducers({
  user,
  loadingBar: loadingBarReducer,
})