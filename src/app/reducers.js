import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import rdvReducer from '../rdv/rdvReducer'
import userReducer from '../user/userReducer'
import statReducer from '../stat/statReducer'
import weightReducer from '../weight/weightReducer'
import sharedReducer from '../utils/sharedReducer'
import errorReducer from '../utils/ErrorReducer'
import infoReducer from '../utils/InfoReducer'

export default combineReducers({
  rdv: rdvReducer,
  user: userReducer,
  stat: statReducer,
  weight: weightReducer,
  error: errorReducer,
  info: infoReducer,
  shared: sharedReducer,
  loadingBar: loadingBarReducer,
})