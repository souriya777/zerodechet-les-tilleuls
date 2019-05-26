import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'
import eventReducer from '../event/eventReducer'
import statReducer from '../stat/statReducer'
import sharedReducer from '../utils/sharedReducer'
import errorReducer from '../utils/ErrorReducer'
import infoReducer from '../utils/InfoReducer'

export default combineReducers({
  user: userReducer,
  event: eventReducer,
  stat: statReducer,
  error: errorReducer,
  info: infoReducer,
  shared: sharedReducer,
  loadingBar: loadingBarReducer,
})