import { FETCH_STAT, RESET_STAT, SET_CURRENT_STAT } from './statActions'
import { SIGNOUT } from '../user/userActions'

export default function stat (state = null, action) {
  switch (action.type) {
    case FETCH_STAT:
      return Object.assign({}, state, { 
        ...action.stat
      })
    case RESET_STAT:
      return null
    case SET_CURRENT_STAT: 
      return Object.assign({}, state,  { 
        current: action.current
      })
    case SIGNOUT: 
      return null
    default:
      return state
  }
}