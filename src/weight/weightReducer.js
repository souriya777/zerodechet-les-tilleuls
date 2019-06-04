import { FETCH_LAST_START_DATE, SET_WEIGHT } from './weightActions'
import { SIGNOUT } from '../user/userActions'

export default function weight (state = null, action) {
  switch (action.type) {
    case FETCH_LAST_START_DATE:
      return (action.lastStartDate) ? { lastStartDate: action.lastStartDate  } : null
    case SET_WEIGHT:
      return action.weight
    case SIGNOUT: 
      return null
    default:
      return state
  }
}