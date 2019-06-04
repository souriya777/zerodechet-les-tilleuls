import { FETCH_STAT, SET_STAT } from './statActions'
import { SIGNOUT } from '../user/userActions'

export default function stat (state = null, action) {
  switch (action.type) {
    case FETCH_STAT:
      return (action.stat) ? { ...action.stat } : null
    case SET_STAT:
      return action.stat
    case SIGNOUT: 
      return null
    default:
      return state
  }
}