import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import userReducer from '../user/userReducer'
import eventReducer from '../event/eventReducer'
import statReducer from '../stat/statReducer'
import errorReducer from '../utils/ErrorReducer'

export default combineReducers({
  user: userReducer,
  event: eventReducer,
  stat: statReducer,
  error: errorReducer,
  loadingBar: loadingBarReducer,
})